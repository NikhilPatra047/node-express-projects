module.exports.items = ['item1', 'item2']; //The items property holds the value which is an array. 

const person = {
    name: "bob",
};

module.exports.singlePerson = person; //assigning an object to a property singlePerson which in 
//itself is a property of the exports which is a property of the module object.

module.exports.anotherItems = [ 'item3', 'item4' ];

const anotherPerson = {
    name: "Bobby"
};

module.exports.anotherPerson = anotherPerson;