#!/bin/bash
GIT_REPO_NAME=$(cat .alfred/git-repo-name.txt)
COMMIT_SHA=$(cat .alfred/git-commit-short.txt)
CONTAINER_NAME=$(cat .alfred/container-name.txt)

CLOUDFRONT_DIST=$(cat .alfred/cdn.txt)

curl -X POST -s $SLACK_URL -d '{
  "type": "mrkdwn",
  "text": "Updating CDN",
  "blocks": [
    { "type": "divider" },
    {
      "type": "section",
      "accessory": {
        "type": "image",
        "image_url": "https://greative-assets.s3.amazonaws.com/octocats/daftpunktocat-guy.gif",
        "alt_text": "Updating CDN"
      },
      "fields": [
        { "type": "mrkdwn", "text": "*Stage:* Deploying to S3" },
        { "type": "mrkdwn", "text": "*Build:* <'$BUILD_URL'/console|'$BUILD_NUMBER'>" },
        { "type": "mrkdwn", "text": "*Project:* '$GIT_REPO_NAME'" },
        { "type": "mrkdwn", "text": "*Branch:* '$JOB_BASE_NAME'" }
      ],
      "text": {
        "type": "mrkdwn",
        "text": "*Updating* CloudFront distribution `'${CLOUDFRONT_DIST}'`"
      }
    }
  ]
}'

aws cloudfront create-invalidation \
  --paths "/*" \
  --distribution-id $CLOUDFRONT_DIST > alfred-cloudfront.json