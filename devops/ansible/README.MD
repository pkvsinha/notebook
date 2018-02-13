Ansible Guide
=============
------------
### TL;DR
Ansible is an orchestration, provisioning and configuration management tool. Use case: you want to Setup an environment where you will deploy your application. You would want several applications to be deployed : application server, database server etc. All these deployment related tasks : provisioning a server, bringing it to a state where all required dependencies are met etc. can be automated using Ansible. You just need to define the list of hosts that you want to manager, Ansible will take care of configuring the server, building the code, and deploying it.

### Problem Space
Ansible is solution to solve the repetitive tasks performed during the release cycle : Build, Deploy, and Test (if everything is working sanely or not)

### Concepts
Lets list down the entities on which Ansible works.
  * Host(s) : This can be provided as input to ansible using `-i` command switch, or it defaults to `/etc/ansible/hosts` or environment variables as _**#TODO**_
  * Module

### Setup
  * Installation  
  * Required Concepts  
    * SSH
    * Scripting


### Getting started  

> `ansible localhost -m ping`

The above commands ansible to connect to the local machine( host name is localhost) and execute the module name 'ping'.

> `ansible localhost -a 'echo "Hello World!"'`
