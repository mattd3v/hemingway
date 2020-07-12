FROM hayd/alpine-deno

RUN mkdir -p ~/app

WORKDIR ~/app

COPY . .
