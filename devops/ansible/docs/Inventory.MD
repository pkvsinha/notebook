# Ansible Inventory
---
<strong><a href="../README.MD" title="Go back to ansible directory">Home</a></strong>
---
Inventory represents a set of hosts that ansible will manage. Later when using, these can be referred to names as defined in the inventory file. The default location for inventory file is `/etc/ansible/hosts`. However a different file location can be provided using `-i` switch in the `ansible` or `ansible-playbook` command line.

```
---
all:
  hosts:
    mailserver.example.com
  children:
    webservers:
      hosts:
        web[01:20].example.com:
          timeout: 60
    dbservers:
      hosts:
        db1[a-f].example.com:
        db2:
          ansible_connection: ssh
          ansible_host: 10.20.30.40
          ansible_port: 22
      vars:
        maxConnections: 10

```

All the host related information can be placed here. If we consider inventory is a database of hosts, then what all host related are the elements of that database, which can grouped together in various ways. Each of those host elements can have properties, that will used by ansible in certain ways while performing operations on them. Some of the important properties are:
* ansible_connection
* ansible_host
* ansible_port
* ansible_user
* ssh_user
* sudo

In addition to the above inventory behavioral parameters, a host data can also be defined using ansible <a href="./Patterns.MD" title="Various ways to define patterns which will be expanded while executing playbooks">Patterns</a>. Along with the ansible properties, variables can also be defined here, both for the host and the group. In the above example YAML file, `timeout` is a host variable while `maxConnections` is group variable.

There are two default groups in ansible `all`, `ungrouped`. All hosts are present in `all` groups, all hosts which are not present in any other group except for `all` will be present under `ungrouped` group. In the YAML file, anything under the `children` tag, becomes a group. These groups can contains `hosts` to define the hosts.
