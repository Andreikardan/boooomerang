// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({position}) {
    this.skin = '🌀';
    this.position = position;
  }

  fly() {
    const boomerangDistance = 10;
    for (let i = 1; i <= boomerangDistance; i += 1) {
      setTimeout(() => this.moveRight(1), 100 * i);
    }
    for (let i = 1; i <= boomerangDistance; i += 1) {
      setTimeout(() => this.moveLeft(1), 100 * (boomerangDistance + i));
    }
    setTimeout(() => this.reset(), 100 * (boomerangDistance * 2));
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
