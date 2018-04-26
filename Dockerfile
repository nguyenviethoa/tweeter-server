FROM node:latest

RUN npm install

EXPOSE 4000

CMD [ “npm”, “start” ]
