public class SingleThreadAccess {
    
    private Object lock = new Object();
    
    private Object value;

    public Object take() {
        boolean shouldWait = false;
        synchronized(lock) {
            if( this.value != null ) {
                shouldWait = true;
            }
        }
        if ( shouldWait ) {
            synchronized(lock) {
                try{
                    lock.wait();
                } catch(InterruptedException e) {
                    System.err.println("Producer is broken");
                }
            } 
        } 
        Object temp = null;
        synchronized( lock ) {
            temp = this.value;
            this.value = null;
            lock.notifyAll();
        }
        
        return temp;
    }

    public void put( Object value ) {   
        boolean shouldWait = false;
        synchronized(lock) {
            if( this.value != null ) {
                shouldWait = true;
            }
        }
        if ( shouldWait ) {
            synchronized(lock) {
                try{
                    lock.wait();
                } catch(InterruptedException e) {
                    System.err.println("Producer is broken");
                }
            }            
        }  
        synchronized(lock) {
            this.value = value;
            lock.notifyAll();  
        }        
    }

    public static void main(String[] args) {
        final SingleThreadAccess queue = new SingleThreadAccess();
        Thread producer = new Thread( new Runnable() {
            public void run() {
                while(true) {
                    long timeTowait = Math.round( Math.ceil( Math.random() * 5000 ) );
                    try {
                        System.out.println("Producer is sleeping for " + timeTowait);
                        Thread.sleep(timeTowait);
                    } catch(InterruptedException e) {
                        throw new RuntimeException();
                    } 
                    queue.put(timeTowait);
                }                
            }
        });
        
        Thread consumer = new Thread( new Runnable() {
            public void run() {
                while(true) {
                    long timeTowait = Math.round( Math.ceil( Math.random() * 5000 ) );
                    try{
                        Thread.sleep(timeTowait);
                    } catch(InterruptedException e) {
                        throw new RuntimeException();
                    }                    
                    System.out.println("Producer was sleeping for " + queue.take() );
                }                
            }
        });
        producer.start();
        consumer.start();
    }
}