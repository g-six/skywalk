#!/bin/bash
GIT_REPO_NAME=$(cat .alfred/git-repo-name.txt)
COMMIT_SHA=$(cat .alfred/git-commit-short.txt)
CONTAINER_NAME=$GIT_REPO_NAME'-'$JOB_BASE_NAME
IMAGE_NAME=$CONTAINER_NAME':'$COMMIT_SHA
curl -X POST -s $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "Hold on while we run some tests...",
  "blocks": [
    { "type": "divider" },
    {
      "type": "section",
      "accessory": {
        "type": "image",
        "image_url": "https://greative-assets.s3.amazonaws.com/octocats/maxtocat.gif",
        "alt_text": "Testing Image"
      },
      "fields": [
        { "type": "mrkdwn", "text": "*Stage:* Testing" },
        { "type": "mrkdwn", "text": "*Build:* <'$BUILD_URL'console|'$BUILD_NUMBER'>" },
        { "type": "mrkdwn", "text": "*Project:* '$GIT_REPO_NAME'" },
        { "type": "mrkdwn", "text": "*Branch:* '$JOB_BASE_NAME'" }
      ],
      "text": {
        "type": "mrkdwn",
        "text": "*Running tests for* `'$JOB_BASE_NAME'.'$COMMIT_SHA'`"
      }
    }
  ]
}' &> /dev/null &
docker build --no-cache --target testing -t $IMAGE_NAME . >> ./docker.log
docker run --rm --name $CONTAINER_NAME $IMAGE_NAME >> ./docker.log

curl -X POST $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "[<'$BUILD_URL'console|'$BUILD_NUMBER'>] *Removing test containers* '$IMAGE_NAME'"
}' &> /dev/null &
