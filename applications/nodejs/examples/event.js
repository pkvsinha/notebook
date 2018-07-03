/**
 * The 'events' module contains the EventEmitter whcih represetns all events in Node.js
 */
const EventEmitter = require('events');

class DoorBell extends EventEmitter {
    
    constructor ( bellSwitch ) {
        super();
        bellSwitch.on('press', this.onPress.bind(this)); // Event Chaining
    }

    onPress() {
        console.log("Ringing Door Bell!");
        this.emit('ringbell');    
    }
}

class BellSwitch extends EventEmitter {
    press() {
        console.log("Doorbell Switch Pressed!");
        this.emit('press');
    }
}

class Gate {
    constructor( bellSwitch ) {
        this.bellSwitch = bellSwitch;
    }

    knock() {
        console.log("Someone Arrived at the door, Knock Knock!");
        this.bellSwitch.press();
    }
}
let bellSwitch = new BellSwitch();
let gate = new Gate( bellSwitch );
let doorBell = new DoorBell( bellSwitch );

doorBell.on('ringbell', function() { 
    console.log("Who's it? Can someone please answer the door?");
});

gate.knock();