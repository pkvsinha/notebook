# Threading
Basic thing about threading is synchronization. Synchronization is used to ensure that changes made by one thread is visible to other threads, and a thread is performing changes to the latest copy of the resoruce.

One way to synchronize around resource is to allow locking mechanism, that if one thread has access to the resource other threads will auutomatically can't access it. They have to wait. This kind of pattern is called as Mutex pattern. The basic mutex supported by the Java language is the object monitor. One can use `synchronized` on an object or the class object, to synchronize the access to shared resources.

When you want n threads to work on the resource at any given time, it is called as Semaphores.

Latches are used as gates that will hold onto the threads until it reaches a condition. Once the condition is met, it breaks open, and threads are allowed to run as per the scheduling policy.

Barriers are used similar to latches in functioning except for it can be reused unlike latches which can not be used after the latch is broken.