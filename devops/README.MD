# DevOps
---

It is a methodology of supporting the operations of a software - from its development to release. Typically the lifecycle of a software application start from it analysis, design and to its implementation, testing and release. Then comes the maintenance where you enhance or fix bugs. To ensure that features supported earlier do not break, you do various kinds of testing -  manual or automation. Then it is deployed to be used by the end users - can be humans or another system.

This cycle can be automated, from a developer checking in a code to that code getting deployed in an actual environment. This automation would require various resource like:
1. A resource that would find out/get triggered when a code is checked in a version repository. (Jenkins, Git/GitHub)
2. After first step, next step is to build the artifact after running the tests. (Jenkins, Maven/Gradle/Npm/Docker)
3. Third step is to deploy the artifact. This would require provisioning the resources, managing the configuration and performing all the checks if the application is successfully deployed. (Ansible)
4. Monitoring the application for its performance and availability (appdynamics, splunk,ab,jmeter,debugging)
