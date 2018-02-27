# Node.js Application Development Guide
---
Node.js provides the platform to develop software application that can run on system on top of a JavaScript runtime. It provides a event-driven non-blocking I/O model for software development.

## Players
Other than providing the basic abstraction to the underlying OS, like Filesystem, Operating system, network, and the likes, Node.js models the problem space with different set of players. Each of these can be combined in variety of ways to solve the problem.

A fore note, functionality in Node.js is divied using modules, a concept although used almost everywhere, which we will see in detail later. A module in can be imported using `require('module_name')`.

* Event
* Stream
* Asynchronous processing
* Errors
* Modules
* Clustering

### Event
Not everything in this world happens serially. Like when you making coffee, you do not stay there and watch it getting done. Instead you do your work and when the sound happens you go check the coffee. Making sound was an event that alerted you that coffee is ready. You chose to respond to it. While reading newspaper, you hear the doorbell, and go answer the door, and not the other way; where keep watching the door if someone is coming.

## Project
`package.json` file defines is the project description for a Node.js application.

```
{
    name : ""
    dependencies : [
        /* Place where you define dependencies required to run the application */
    ],
    devDependencies : [
        /* Place where you define dependencies required to build and test the application */
    ],
    peerDependencies : [
        /* Mainly used by plugins to indicate the presence of particular packages for it run properly. The application is not directly dependent on these dependencies but require their presence   */
    ]
}
```

All node.js projects uses a package manager (npm or yarn) to build and package the node.js application. `npm` is the default node.js package manager.