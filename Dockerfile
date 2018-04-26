FROM node:latest

RUN apt-get update && apt-get install -y libltdl7 && rm -rf /var/lib/apt/lists/*

RUN npm install

EXPOSE 4000

CMD [ “npm”, “start” ]
