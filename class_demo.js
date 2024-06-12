

class Sprite {
  constructor(name, location, direction) {
      this.name = name
      this.location = location
      this.direction = direction
  }
}

class Player extends Sprite { //EXTENDS create an IS_A relationship
  constructor(location, direction) {
      super("hero", location, direction);

      this.health = 100;
      this.inventory = []; //possessions
      this.gold = 0;
      this.isAlive = true;
  }
  takeDamage(amount) {
      this.health -= amount;
      if (this.health <= 0) {
          this.isAlive = false;
      }
  }
  shoot(direction) {
      if (!this.isALive) {
          return; //do nothing
      }
      //TBD
  }
  ressurect() {
      this.health = 100;
      this.isALive = true;
  }
  getStatus() {
      return { health: this.health, alive: this.isALive }
  }
}

// TEST
const p = new Player([0,0], [0,0])
console.log(JSON.stringify(p.getStatus()));
p.takeDamage(25);
console.log(JSON.stringify(p.getStatus()));