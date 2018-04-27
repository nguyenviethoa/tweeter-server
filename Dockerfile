FROM node:latest

RUN mkdir /home/node/app

ADD . /home/node/app

EXPOSE 4000


