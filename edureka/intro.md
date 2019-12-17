# Docker

## What is Docker

- Tool Designed to create , deploy and run applications by using containers.
- Docker Containers are Lightweight alternatives to virtual machines uses host machine OS not Guest OS.
- No Need to preallocate RAM in containers.

## Docker In a Nutshell

- DockerFile builds a docker image and that image contains all the projects code
- Run that image to create as many docker containers as you want
- Image can be uploaded to Docker hub form that any one can pull that image and build a container

## Docker Example

- Create a DockerFile
- Push the code to Git Repository
- Client Server Pull it down and build exact environment used in production without to configure the Client Server at All.

## Docker Images & Containers

### Docker Images

- Read Only Template Used To Create Containers.
- Built by Docker Users.
- Stored in Docker Hub or your local registry

### Docker Containers

- Isolated Application Platform
- Contains Everything needed to run the Application.
- Build from One or More Images

### Commands

- Install Docker (To Your Platform)

- Pull a Image from docker hub

```sh
    sudo docker pull image_name
```

- To Run the Image in a Container

```sh
    sudo docker run -it image_name
```

- To check Installed Images

```sh
docker images
```

- docker running containers

```sh
docker ps
```

- all previously ran containers

```sh
docker ps --all
# or
docker ps -a
```

- accessing a running container

```sh
docker exec -it container_id bash
```

- to stop container

```sh
docker stop container_id
```

- to store image in the local system

```sh
docker commit container_id name
```

- to login to docker

```sh
docker login
```

- to logout from docker

```sh
docker logout
```

- to push image to docker hub

```sh
docker push name
```

- remove the container

```sh
docker rm container_id
```

- remove the image

```sh
docker rmi image_id
```

## Docker Compose

- written in .yml run all containers

### Commands for Docker Compose

- To run using docker compose

- with files

> Dockerfile
> requirements.txt
> webapp.py flask code
> docker-compose.yml

```sh
docker-compose up
```

- to stop docker-compose

```sh
docker-compose down
```

## Docker File Syntax & Commands

```DockerFile
# comment
command arg1 arg2 ...
```

### FROM Command

- it defines the base image

```Dockerfile
FROM ubuntu
```

### RUN Command

- to run a particular command (both shell or other image commands)

```Dockerfile
RUN apt-get install -y curl
```

### CMD Command

- only shell commands

```Dockerfile
CMD "echo" "Hello World"
```

### ENTRYPOINT Command

- the first executing statement is entrypoint
- override CMD command

```Dockerfile
# Usage : ENTRYPOINT application "arg","arg",..

# args are optional they can be provided by CMD
# or during the creation of a container

ENTRYPOINT echo
# Usage example with CMD

# Arguments set with CMD can be overridden during "run" CMD "Hello Docker!"
CMD "Welcome to Docker!"
ENTRYPOINT echo
```

### ADD Command

- add files from source to destination (source your machine to dest container)

```Dockerfile
ADD /source /destination_copy
```

### ENV Command

- add enviroment variables to the docker container.
- Key Value Pairs

```DocKerfile
ENV SERVICE_WORKS 4
```

### WORKDIR Command

- work with a particular dir path in the container

```Dockerfile
WORKDIR /path
WORKDIR ~/
```

### EXPOSE Command

- associate network connection or a specified PORT between process inside the container

```Dockerfile
EXPOSE 8080
```

### MAINTAINER Command

- adding authors name

```Dockerfile
MAINTAINER authors_name
```

### USER Command

- the user who can execute the docker container

```Dockerfile
# USER USER_ID
USER 751
```

### VOLUME Command

- enable access from your container to a directory on the host machine (i.e Mounting It).

```Dockerfile
# Usage VOLUME ["/dir_1","/dir_2"..]
VOLUME ["/my_files"]
```

### Install Apache Web Server

- you can find folder apache_demo

### Build Image with Dockerfile

```sh
sudo docker build -t tag_name .
```

### PORT MAPPING

- connect between container and your machine

```sh
# docker run -p host_port:container_port
docker run -p 80:80 --name=ContainerName image_name
```

### Install Nginx Server

- you can find folder nginx_demo

- build the image

```sh
docker build -t nginx_demo .
```

- port mapping as above
- stop the container without ^C

```sh
# ps will give container info
docker ps
# run stop with container id
docker stop container_id
```

## Most Used Docker Commands

```sh
# to check the version
docker --version
# help
docker --help
# pull the image
docker pull image_name
# run the image to create a container
docker run image_name
# build the image using Dockerfile
docker build -t tag_name /path
# login
docker login
# push to docker hub
docker push image_name
# running containers list processes ps
docker ps
# images list
docker images
# stop a container
docker stop container_id
# abnormally killing a container
docker kill container_id
# remove a container
docker rm container_id
# remove a image
docker rmi image_id
# execute a container with a command access shell
docker exec -it container_id bash

# more
docker commit
docker import
docker export
docker container
docker compose
docker swarm
docker service
```

### Dokcer Container Command

- various operation on the container

```sh
docker container logs container_id
docker container kill container_id
docker container rm container_id
docker container run container_id
docker container start container_id
```

- to tag image

```sh
docker tag name harshithkrpt/name
```

### Docker Commit Command

- new image of an edited container on local repo

```sh
docker commit container_id name
```

### Docker Export Command

- export image into tar file

```sh
docker export --output="latest.tar" image_name
```

### Docker Import Command

- import the image from tar file

```sh
docker import complete_path/demo.tar
```

### Docker Swarm Commands

- network of docker engines to execte parallely

```sh
docker swarm init --advertise-addr 192.168.1.100
docker swarm join
docker swarm join-token
docker swarm leave
```

### Docker Service Command

- control any existing Docker Service

```sh
docker service ls
docker service ps
docker service scale
docker service stop
docker service logs
dokcer service rm
```

## Docker Compose & Swarm

### What is Docker Compose

- Docker Compose is used to run multi-container applications.
- Each container will run a stand alone application and can communicate with other containers present in the same host.
- Ex : MEAN Stack Application.

```sh
docker-compose up
```
