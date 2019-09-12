#!/bin/bash
set -ex

# Ensure that the URL ends with a slash so that the proxy_pass directive
# in the nginx config will strip the "/api" path prefix before forwarding
# the request to the backend Kastle API.
export KASTLE_API_URL="${KASTLE_API_URL%/}/"

# Replace all occurances of ${KASTLE_API_URL} in the template config file
# before dropping it into /etc/nging/conf.d/
envsubst '${KASTLE_API_URL}' < /opt/candid/nginx/conf.d/10-skywalk-reverse-proxy.conf > /etc/nginx/conf.d/default.conf

# Run nginx interactively so that it logs to the container's STDOUT and
# it gets forwarded to Cloudwatch.
exec nginx -g 'daemon off;'
