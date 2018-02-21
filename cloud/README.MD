# Cloud Guide
---
Cloud computing is different from the traditional mode of software development and deployment/delivery model, in which the application is now supposed to be developed and deployment considering failure and availability in mind. To ensure that the services are available all the time, resources need to be deployed on a global scale. If a particular region of the world is affected by downtime, the application should be made available in a different region. Further regions can have zone to ensure another level of guarantee and to provide high availability of services. This is the basic idea - to tackle failures with software and still ensure availability of the services. Now to achieve that goal everything has to be made virtual - CPU, Memory, Network, Storage etc - that is they are nothing more than a piece of software abstracting away the actual hardware.

We used following terms:
* Resources: Example CPU, Storage, Memory
* Services: Services offered like S3 Storage etc.
* Region: A Geographical landscape
* Zones: A isolated yet loosley connected zone in a region. _**TODO**_

Now that the resources and services are available globally, security is the first consideration - IAM. Following are the items in the security domain.

Users are person, application who needs access to AWS resources or services. A user can become a part of the group so that related permissions are assigned to the group and user under that group has all the specified permissions. Permission are specified using Policies. User authenticate themselves using password or access key; after successful authentication, that user can perform action on resources/services as prescribed by the attached policy to the group. There are use case where the AWS resources or an IAM user from another account want to perform certain actions. To authenticate themselves everyone need to have a credential/access key. To tackle this, a role can be created defining the policies. Everytime a new resource is created that credentials will be passed to them by AWS automatically.

* User
* Groups
* Roles
* Policies
* Identity
