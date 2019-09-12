docker run -dit --rm \
-v /home/ubuntu/d/skywalk/nginx/conf.d/skywalk-reverse-proxy-webpack-dev.conf:/etc/nginx/conf.d/skywalk.conf \
-v /var/cache/nginx:/var/cache/nginx \
-v /home/ubuntu/d/skywalk/nginx/nginx.conf:/etc/nginx/nginx.conf \
--name proxy -p 80:80 -p 443:443 nginx