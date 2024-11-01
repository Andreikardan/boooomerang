// Наш герой.

const Boomerang = require("./Boomerang");
// const a = new Boomerang()

class Hero {
  constructor({position}) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    // this.boomerang = a
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
