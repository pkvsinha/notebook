# Cloud Guide
---
Cloud computing is different from the traditional mode of software development and deployment/delivery model, in which the application is now supposed to be developed and deployed considering failure and availability in mind. To ensure that the services are available all the time, resources need to be deployed on a global scale. If a particular region of the world is affected by downtime, the application should be made available in a different region. Further regions can have zone to ensure another level of guarantee and to provide high availability of services. This is the basic idea - to tackle failures with software and still ensure availability of the services. Now to achieve that goal everything has to be made virtual - CPU, Memory, Network, Disk Storage etc - that is they are nothing more than a piece of software abstracting away the actual hardware.

We used following terms:
* Resources: Example CPU, Storage, Memory
* Services: Services offered like S3 Storage which use resources underneath. There are existing services from cloud and then you can also create you own service and expose it.
* Global
* Region: A Geographical landscape comprise of regional resources
* Zones: A isolated yet loosely connected zone in a region. _**TODO**_

Serices/Resources can be categorized as gloabl, regional, zonal. For example Dik image, Disk Snapshot, network is a global resource. External IP address is a regional resource. Computer engine is zonal resource. Why this categorization? To understand the availabillity of one resource from one zone or region to another. For exapmle gloabl resource are accessible from everyhere, where a zonal resourec will not visible to resourse outside of that zone, and same logic for the regional resources.

Services that are offered by cloud providers can be categorized as - managed and unmanaged. Managed are those services which will make use of the unmanaged services and provide just enough exposure for the user to configure and use them. They are read-made solutions for the general purpose computing. All the overhead of managing and monitoring - to handle failures etc - is with the cloud provider and customer is responsible for the application that is goign to be deployed. But a user will always have the option to use unmanaged services and maintain them on their own.

Security and network are two global services that are not limited to a zone or region. They will be visible to resources and services across region and zones.
