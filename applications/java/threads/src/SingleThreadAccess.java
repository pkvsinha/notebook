public class SingleThreadAccess {
    
    private Object lock = new Object();
    
    private Object value;

    public synchronized Object take() {
        while( this.value == null ) {
            try{
                this.wait();
            } catch(InterruptedException e) {
                System.err.println("Producer is broken");
                return null;
            }
        }
       
        Object temp = this.value;
        this.value = null;
        this.notifyAll();
        
        return temp;
    }

    public synchronized void put( Object value ) {   
        while( this.value != null ) {
            try{
                this.wait();
            } catch(InterruptedException e) {
                System.err.println("Producer is broken");
                return;
            }
        }
        this.value = value;
        this.notifyAll();      
    }

    public static void main(String[] args) {
        final SingleThreadAccess queue = new SingleThreadAccess();
        Thread producer = new Thread( new Runnable() {
            public void run() {
                while(true) {
                    long timeTowait = Math.round( Math.ceil( Math.random() * 5000 ) );
                    try {
                        Thread.sleep(timeTowait);
                    } catch(InterruptedException e) {
                        throw new RuntimeException();
                    } 
                    System.out.println("Producer : " + timeTowait);
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
                    System.out.println("Consumer : " + queue.take() );
                }                
            }
        });
        producer.start();
        consumer.start();
    }
}