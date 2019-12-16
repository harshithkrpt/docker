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
command arg1 arg2
```

### FROM Command

- it defines the base image

```Dockerfile
FROM ubuntu
```
