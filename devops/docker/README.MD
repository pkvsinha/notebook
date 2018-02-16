# Docker Guide
---
## TL;DR
The basic idea here is to allow the application to be defined with all the dependency that it has on the underlying system, such OS, network interfaces, file system access etc. at build time. Docker will read all that and create an image. The images self describes it dependencies - to docker engine. When this image is run using docker, all its depdencies are met/provided by docker engine.

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

Start Docker  
> `sudo systemctl start docker`

Liunx postinstall  
To allow non-sudo users to  run docker. **_#TODO_**
