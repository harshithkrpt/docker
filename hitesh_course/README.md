# Docker Introduction

## Docker Image

### Busybox

Size : 1 to 5 mb image

- docker pull busybox
- docker run busybox commands
- Ex : docker run busybox ls

## -it Flag

### invistigate

- docker ps --all

- Playing with MongoDB

- docker pull mongo
- docker run mongo

### Start Mongo

- docker start mongo_id

note : you will get mongo_id docker mongo

### Execute Mongo

- docker exec -it mongo_id bash

- Explanation : as mongo container is secure you have to access via bash that is the reason why you execute the mongo_id along with bash

### Stop Mongo Image

- docker stop mongo_id // most often you should use this commad
- docker kill mongo_id

## Multiple Ways to Get inside a docker

- Number 1 Way :

```sh
docker exec -it mongo_id bash
```

- Number 2 Way : (start and get inside the container)
- Not Recommended

```sh
docker run -it mongo bash
```

### Custom Docker Image

- create Dockerfile

- Dockerfile interacts with docker client and it creates a custom image

- running Dockerfile

```sh
docker build .
```

## Providing a Custom Name

- docker build -t name
- name convention : username/imagename:latest
- Successfully tagged harshithkrpt/mymango:latest

## Containerize Node Application

- bring base image
- create a working directory
- bring all files
- run installer
- default command

- to open a specific port to connect to docker port -p

```sh
#             mymachine:dockerport
docker run -p 8000:8000 harshithkrpt/nodeapp
```
