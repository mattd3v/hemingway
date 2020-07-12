FROM hayd/alpine-deno AS base

RUN mkdir -p ~/app

WORKDIR ~/app

COPY . .
