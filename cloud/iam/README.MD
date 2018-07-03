# IAM
---

IAM stands for Identity and Access management. It is a generalized concept which defines rules and techniques used to make the cloud environment safe and secure to use. Based on the rules that is defined, a resource in your project or account can be allowed access to.

There are following types of users to a cloud resource: a user/owner, an application, a user who is allowed to access the resource on the owner's behalf.

Users are person, application who needs access to AWS resources or services. A user can become a part of the group so that related permissions are assigned to the group and user under that group has all the specified permissions. Permission are specified using Policies. User authenticate themselves using password or access key; after successful authentication, that user can perform action on resources/services as prescribed by the attached policy to the group. There are use case where the AWS resources or an IAM user from another account want to perform certain actions. To authenticate themselves everyone need to have a credential/access key. To tackle this, a role can be created defining the policies. Everytime a new resource is created that credentials will be passed to them by AWS automatically.

* User
* Groups
* Roles
* Policies
* Identity

Authentication is process to identify the user - "you are who you claim you are".
