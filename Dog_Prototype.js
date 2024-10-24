function ShowDog (name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog ();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
  console.log ("Stack!");
}

ShowDog.prototype.bait = function () {
  console.log ("Bait!");
}

ShowDog.prototype.gait = function () {
  console.log (kind + "ing");
}

ShowDog.prototype.groom = function () {
  console.log ("Groom!");
}

var scotty = new ShowDog ("Scotty", "Scottish Terrier", 15, "Cookie");

function Dog (name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log (this.name + " says Woof Woof!");
  } else {
    console.log (this.name + " says woof woof...");
  }
}

Dog.prototype.run = function () {
  console.log ("Run!");
}

Dog.prototype.wag = function () {
  console.log ("Wag!");
}

Dog.prototype.sit = function () {
  console.log (this.name + " siting");
}

var fido = new Dog ("Fido", "Mixed", 37);

var flufy = new Dog ("Fluffy", "Poodle", 30);

var spot = new Dog ("Spot", "Chihuahua", 10);

spot.bark = function () {
  console.log (this.name + " says WOOF WOOF!!!")
}

fido.bark ();
fido.run ();
fido.wag ();

flufy.bark ();
flufy.run ();
flufy.wag ();

spot.bark ();
spot.run ();
spot.wag ();
spot.sit ();

scotty.bark ();
scotty.stack ();
console.log (scotty.league);
console.log (scotty.species);

if (fido instanceof Dog) {
  console.log ("Fido is a Dog");
}

if (fido instanceof ShowDog) {
  console.log ("Fido is a ShowDog");
}

if (scotty instanceof Dog) {
  console.log ("Scotty is a Dog");
}

if (scotty instanceof ShowDog) {
  console.log ("Scotty is a ShowDog");
}

console.log ("fido constructor is a " + fido.constructor);
console.log ("scotty constructor is a " + scotty.constructor);

