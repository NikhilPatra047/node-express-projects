const EventsEmitter = require('events');

const customEmitter = new EventsEmitter();

customEmitter.on(`response`, () => {
    console.log(`data received`);
}); //name of the event and the callback function

customEmitter.on('response', (name, id) => {
    console.log(`${name}: ${id}`);
})

customEmitter.emit('response', 'Nikhil', 23);



//order matters. 
//listen for event first, and then emit it 
