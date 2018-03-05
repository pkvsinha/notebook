# Node.js Application Development Guide
---
Node.js provides the platform to develop software application that can run on system on top of a JavaScript runtime. It provides a event-driven non-blocking I/O model for software development.

## Application
1. Network application
2. Streaming application

## Players
Other than providing the basic abstraction to the underlying OS, like Filesystem, Operating system, network, and the likes, Node.js models the problem space with different set of players. Each of these can be combined in variety of ways to solve the problem.

A fore note, functionality in Node.js is divied using modules, a concept although used almost everywhere, which we will see in detail later. A module can be imported using `require('module_name')`.

* Event
* Streams
* Errors
* Modules
* Process
* Net, Socket, HTTP
* Clustering
* Asynchronous processing

### Event
Not everything in this world happens serially. Like when you making coffee, you do not stay there and watch it getting done. Instead you do your work and when the sound happens you go check the coffee. Making sound was an event that alerted you that coffee is ready. You chose to respond to it. While reading newspaper, you hear the doorbell, and go answer the door, and not the other way; where keep watching the door if someone is coming.

## Application Description
`package.json` file defines is the project description for a Node.js application.

```
{
    "name" : "simple-app",
    "description" : "A node application",
    "version" : "0.0.1",
    "keywords" : "example tag", /*they are like tags, help search you package*/
    "homepage" : "https://www.github.com/prashant-sinha/notebook/wiki", /*link to projet home page*/
    "bugs" : {
        "url" : "https://www.github.com/prashant-sinha/notebook/issues",
        "email" : "bugtraking@myorg.org"
    },
    "license" : "BSD-3-Clause", 
    "author" : "Prashant Sinha <pkv.sinha492@gmail.com> (http://www.pkvsinha.comm)",
    "contributors" : [ "Name <emailid> (website)" ],
    "repository" : {
        "type" : "git",
        "url" : "https://githhub.com/prashant-sinha/notebook.git"
    },
    scripts : {

    },
    /* Dependency  section - list down package and their versions
        
        - version : exact match like 2.1.1
        - (>,>=,<,<=)version : greater, greater than or equal, less than, less than equal version
        - version - version2 : greater or equal to version1 and less or equal to version2
        - ~version : approximately equivalent
        - ^version : compatible with version
        - 1.2.x : anything like 1.2.0, 1.2.1 but not 1.3.0
        - * or "" : anything
    */
    dependencies : [
        /* Place where you define dependencies required to run the application */
    ],
    devDependencies : [
        /* Place where you define dependencies required to build and test the application */
    ],
    peerDependencies : [
        /* Mainly used by plugins to indicate the presence of particular packages for it run 
        properly. The application is not directly dependent on these dependencies but require 
        their presence   */
    ]
}
```

All node.js projects uses a package manager (npm or yarn) to build and package the node.js application. `npm` is the default node.js package manager.