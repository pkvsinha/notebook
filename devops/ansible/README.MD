# Ansible Guide
=============
------------
### TL;DR
Ansible is an orchestration, provisioning and configuration management tool. Typically a system is dependent on other systems for its functioning. This creates an environment where a software will be deployed - where all the required system are available and they can now communicate with each other to do their operations.

### Use case:
You want to Setup an environment where you will deploy your application. You would want several applications to be deployed : application server, database server etc. All these deployment related tasks : provisioning a server, bringing it to a state where all required dependencies are met etc. can be automated using Ansible. You just need to define the list of hosts that you want to manage, Ansible will take care of configuring the server, building the code, and deploying it - as per the declarative code that you write.

### Problem Space
Ansible is solution to solve the repetitive tasks performed to bring an application to life - with all its dependencies met.

### Concepts
Lets list down the entities on which Ansible works.

  * Host(s) : This can be provided as input to ansible using `-i` command switch, or it defaults to `/etc/ansible/hosts` or environment variables as _**#TODO**_
  Hosts can be organized/grouped as inventory. Further these can be static or dynamic. For further Details checkout <a href="./docs/Inventory.MD" title="you may read it later after finishing this section">Inventory</a> section.

  * Module: A module is an encapsulated piece that will do the heavy lifting to perform certain tasks, for example if the host has java installed. They are referred by names and they are passed values as key-value pairs.

  * Playbooks: It is a recipe of configuration management for a set of hosts. The goal is perform a set of actions (called as plays and contains list of tasks) on a group of hosts. The tasks are nothing more than a call to ansible module. Playbooks are written in YAML files. Plays are organized in playbooks to achieve certain set of actions to be performed on set of hosts in a particular order.

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
`-m` denotes the module name - the default module is `command` module, which executes the commands provided as arguments with `-a` flag - `-a` is the argument to `command` module as it is the default when none is specified.

> `ansible localhost -a 'echo "Hello World!"'`
