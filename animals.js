class Animal{ //BASE CLASS - noun (person, place or thing)
  constructor(kind, noise){ //PARAMETERS TO NEW
    this.kind = kind //PROPERTIES a variable inside
    this.noise = noise
  }
  speak(){ //METHOD a function inside an object
    return `The ${this.kind} goes ${this.noise}.`
  }
}

// let dino = new Animal("t-rex", "roar"); //CREATE A NEW INSTANCE OF ANIMAL
// console.log(dino.speak()); //CALLING METHOD ON THE INSTANCE

// let animal2 = new Animal("lion", "roar"); //CREATE A NEW INSTANCE OF ANIMAL
// console.log(animal2.speak()); //CALLING METHOD ON THE INSTANCE

class Pet extends Animal{ //PET IS_A animal
  constructor(name, kind, noise){
    super(kind, noise); // call parent's constructor
    this.name = name; // add a third
  }
  speak(){ // OVERRIDE A METHOD - replace
      return `${this.name} the ${this.kind} goes ${this.noise}`
  }
 } 

 class Cat extends Pet{
  constructor(name){
    super(name, "cat", "meow")
  }
 }

 class Dog extends Pet{
  constructor(name){
    super(name, "dog", "woof")
  }
 }

let animals = [
 new Cat("Bianca"),
new Cat("Fineley"),
new Dog("Doyo"),
new Pet("Bessie", "cow", "chomp"),
new Animal("t-rex", "roar"),
new Animal("lion", "roar")
]//end animal list

animals.forEach(animal => console.log(animal.speak())); //duck typing
console.log("");
console.log(animals.map(a=>a.speak()).join("\n"));

console.log("");

 biana = new Cat("Bianca")
 console.log(biana.speak());

 fineley = new Cat("Fineley")
 console.log(fineley.speak());

 doyo = new Dog("Doyo")
 console.log(doyo.speak()); 
 
 johnny = new Dog("Johnny")
 console.log(johnny.speak());

 bessie = new Pet("Bessie", "cow", "chomp")
 console.log(bessie.speak());