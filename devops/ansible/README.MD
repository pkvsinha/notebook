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
  Hosts can be oraganized a inventory.
  * Module: A module is an encapsutalted entity that perfrom certain tasks. They are referred by names and they are passed values as key-value pairs.
  * Playbooks: It is a recipe of configuration management for a set of hosts. The goal is perform a set of actions (called as tasks) on a group of hosts. The tasks are nothing more than a call to ansible module. Playbooks are written in YAML files. They basically contains sections called as plays. Plays are oraganized in playbooks to achieve certain set of actions to be performed on set of hosts in a particular order.
    * Play: A play has a name, and is targeted for a set host machine and uses a remote user to perform the tasks defined for that play.

    ```
    ---
    - name: A play name
      hosts: webserver # can use pattern to include a list of hosts
      vars: # variables to be used inside this play
        http_port: 8002
      remote_user: ec2-user # log in to the hosts in 'webserver' group using 'web' as the
      become: yes # become the root user. this property can also be used inside tasks, to run only particular task as root
      become_method: sudo # it can 'su' too.
      tasks:
        - name : Task name
          command : echo "Hello World!"
          notify:
          - restart iptables # listeners to be run on successful play completions - all task to be run successfully, these should be defined as 'handlers' task, on a global scope.

    ...
    ```
    Playbooks can be run using `ansible-playbook` or using `ansible-pull`
### Setup
  * Installation  
  * Required Concepts  
    * SSH
    * Scripting


### Getting started  

> `ansible localhost -m ping`

The above commands ansible to connect to the local machine( host name is localhost) and execute the module name 'ping'.

> `ansible localhost -a 'echo "Hello World!"'`
