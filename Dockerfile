FROM ubuntu:latest

RUN apt-get update && apt-get install -y libltdl7 && rm -rf /var/lib/apt/lists/*

EXPOSE 4000
