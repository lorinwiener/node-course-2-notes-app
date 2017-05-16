// Arrow function quitks

var square = (x) => {
  var result = x*x;
  return result;
};
var square2 = (x) => x*x; // Just an implicit return statment
var square3 = x => x*x; // One argument does not require parenthesis
var square4 = () => 81; // No argument requires parenthesis

console.log(square(9));
console.log(square2(9));
console.log(square3(9));
console.log(square4(9));

/////////////////////////////////////////

var user = {
  name: 'Lorin',
  sayHi: () => {
    console.log('Hi');
  }
}

user.sayHi();

///////////////////

// ARROW FUNCTIONS TO NOT BIND A 'this' KEYWORD
// If your function uses the keyword 'this' it won't work if you swap it out for an arrow FUNCTIONS
//  or the arguments array
// The 'this' binding refers to the parent binding or the global this KEYWORD

var user2 = {
  name: 'Lorin',
  sayHi: () => {
    console.log(arguments); // This will not work it returns the global arguments
    console.log(`Hi.  I'm ${this.name}.`); // Prints 'Hi. I'm undefined'
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi.  I'm ${this.name}.`); // Prints properly using no arrow
  }
}

user2.sayHi();
user2.sayHiAlt();
user2.sayHi(1, 2, 3);
user2.sayHiAlt(1, 2, 3);
