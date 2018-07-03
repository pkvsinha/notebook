# Docker Guide
---
## TL;DR
The basic idea here is to allow the application to be defined with all the dependency that it has on the underlying system, such OS, network interfaces, file system access etc. at build time. Docker will read all that and create an image. The images self describes it dependencies - to docker engine. When this image is run using docker, all its dependencies are met/provided by docker engine.

* First step => declare the app dependencies. `Dockerfile`
```
FROM node:carbon # parent image
WORKDIR /usr/src/app # working directory for app
ADD . /usr/src/app # Add the contents from host
RUN <command> # command to install any dependencies like npm install
EXPOSE 8080  # Expose port 8080 from inside the container
ENV JAVA_HOME /path-to-jvm # any environment variable
CMD ["node", "app.js"]  # command to start the app
```

* Second Step => build the app using that docker.
> `docker build -t <name>:<tag>`  
`docker run -d -p 5050:8080 <name>:<tag>`

* Push that image to a registry.

## Problem Space
Allow multiple versions of applications to run irrespective of machine - separating the os and runtime dependency and other resource dependency.

## Players
 * Image. Its running instance is called as container. Analogy, a program's running instance is called as process.

* Start Docker  
> `sudo systemctl start docker`

* Liunx postinstall  
To allow non-sudo users to run docker. **_#TODO_**

In a typical distributed application environment, you would want load balancing to balance the load among similar instances of the app, have cluster of services to work together to deliver the application. Let's divide the process.

## Develop using docker

You develop you application and create and image of it.  The dependencies that you specify are the port, file volumes etc. Commands like `docker build -t` is used for it.

## Deploy using docker
Once you have created a perfect image, you can run them standalone to test them.
> `docker run <username/imagename:tag>`

### Create a cluster
In distributed environments you need to run multiple instances of them and add them behind a load balancer. So you create a cluster of multiple machines. This is called a swarm (although kubernetes can also be used).

* Create a swarm: Below command will create a cluster, the machine from where this command is run becomes the manager
> `docker swarm init`

* Add more machines to the swarm: Below command will add the machine from which the command is run as worker to the manager
> `docker swarm join --token <token_from_init> <manager_ip:port>`

### Deploy in cluster
To deploy a docker image, we need to provide/specify the external dependencies like database services etc. `docker-compose` is used for this purpose. It basically contains service definition for individual container images to be run, will manage its deployment and load balancing them etc.

> `docker stack deploy -c docker-compose.yml <stack_name>`

services related information can be gathered using `docker service ls` or `docker service ps <stack_name>` command, which will list down the individual container running in the stack(group of interrelated services) or a service
