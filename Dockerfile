FROM node:10 as installer

WORKDIR /usr/src/

COPY ./app ./app
COPY ./config ./config
COPY ./static ./static
COPY .babelrc .
COPY .nvmrc .
COPY check-socket.js .
COPY *.config.js ./
COPY *.json ./
COPY *.yaml ./

RUN npm install 2>&1


FROM node:10 as testing
WORKDIR /usr/src/
COPY --from=installer /usr/src/ ./

RUN npm run test -- --no-colors 2>&1

FROM node:10 as builder
WORKDIR /usr/src/
COPY --from=installer /usr/src/node_modules/ ./node_modules

COPY ./app ./app
COPY ./config ./config
COPY ./static ./static
COPY .babelrc .
COPY .nvmrc .
COPY check-socket.js .
COPY webpack.config.js .
COPY tsconfig.json .

RUN npm run build