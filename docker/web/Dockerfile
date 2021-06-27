FROM node:14.15.1-alpine AS node_builder

WORKDIR /app

RUN apk update && \
  npm install && \
  npm install -g @vue/cli
