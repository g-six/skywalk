#!/bin/bash
GIT_REPO_NAME=$(cat .alfred/git-repo-name.txt)
COMMIT_ID=$(cat .alfred/git-commit-id.txt)
S3_BUCKET=$(cat .alfred/s3-bucket.txt)
GIT_MESSAGE=$(cat .alfred/git-message.txt)

sed ':a;N;$!ba;s/\n/\\n/g' .alfred/git-message.txt .alfred/git-safe-message.txt

curl -X POST -s $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "Building Image",
  "blocks": [
    { "type": "divider" },
    {
      "type": "section",
      "accessory": {
        "type": "image",
        "image_url": "https://greative-assets.s3.amazonaws.com/octocats/octocat-wave.gif",
        "alt_text": "Octocat"
      },
      "fields": [
        { "type": "mrkdwn", "text": "*Stage:* Preparing files for S3" },
        { "type": "mrkdwn", "text": "*Build:* <'$BUILD_URL'console|'$BUILD_NUMBER'>" },
        { "type": "mrkdwn", "text": "*Project:* '$GIT_REPO_NAME'" },
        { "type": "mrkdwn", "text": "*Branch:* '$JOB_BASE_NAME'" }
      ],
      "text": {
        "type": "mrkdwn",
        "text": "*Target bucket:* \n ```'$S3_BUCKET'```"
      }
    }
  ]
}' > /dev/null

touch ./docker.log
