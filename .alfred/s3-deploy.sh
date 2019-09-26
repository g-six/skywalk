#!/bin/bash
GIT_REPO_NAME=$(cat .alfred/git-repo-name.txt)
COMMIT_SHA=$(cat .alfred/git-commit-short.txt)
CONTAINER_NAME=$GIT_REPO_NAME'-'$JOB_BASE_NAME
IMAGE_NAME=$CONTAINER_NAME':'$COMMIT_SHA
S3_BUCKET=$(cat .alfred/s3-bucket.txt)

curl -X POST -s $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "Updating bucket",
  "blocks": [
    { "type": "divider" },
    {
      "type": "section",
      "accessory": {
        "type": "image",
        "image_url": "https://greative-assets.s3.amazonaws.com/octocats/daftpunktocat-thomas.gif",
        "alt_text": "Deploying to S3"
      },
      "fields": [
        { "type": "mrkdwn", "text": "*Stage:* Deploying to S3" },
        { "type": "mrkdwn", "text": "*Build:* <'$BUILD_URL'/console|'$BUILD_NUMBER'>" },
        { "type": "mrkdwn", "text": "*Project:* '$GIT_REPO_NAME'" },
        { "type": "mrkdwn", "text": "*Branch:* '$JOB_BASE_NAME'" }
      ],
      "text": {
        "type": "mrkdwn",
        "text": "*Synching* `'${IMAGE_NAME}'` build to '$S3_BUCKET'"
      }
    }
  ]
}'

docker build -t $IMAGE_NAME -f Dockerfile.build . > ./docker.log

docker run \
  --name $CONTAINER_NAME \
  --rm \
  --env-file .env \
  -d \
  $IMAGE_NAME sleep 30 > ./docker.log

docker exec -it $CONTAINER_NAME aws s3 sync --acl public-read --sse --delete ./ $S3_BUCKET > ./docker.log

docker images | grep -E $CONTAINER_NAME | awk -e '{print $3}'| xargs docker rmi -f > ./docker.log

# docker ps -a | grep -E Exited | awk -e '{print $1}' | xargs docker rm $GIT_REPO_NAME'-'$JOB_BASE_NAME
# docker images | grep -E none | awk -e '{print $3}'| xargs docker rmi $GIT_REPO_NAME'-'$JOB_BASE_NAME
curl -X POST -s $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "[<'$BUILD_URL'console|'$BUILD_NUMBER'>] *Synching* `'${COMMIT_SHA}'` to '$S3_BUCKET' *Complete*"
}'
