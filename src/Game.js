// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');
const { play } = require('sound-play');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.


class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang= new Boomerang({position:0})
    this.hero = new Hero({position:0}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({position:10});
    this.view = new View();
    this.track = [];
    this.contact = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;

    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
   
  }

  check() {

    if(this.contact === 0){
      this.boomerang.moveRight()
    }
    if(this.contact===1){
      this.boomerang.moveLeft()
    }
    
    if(this.boomerang.position >= this.enemy.position){
     play('./sounds/just-like-magic.wav');
      this.contact=1
      this.enemy.die(this.trackLength-1)
      this.enemy.generateSkin()
    }
    if (this.boomerang.position <= this.hero.position) {
      this.contact = 2;
    }
    if (this.hero.position + 1 === this.enemy.position) {
      this.hero.die();
    }


  }
   play() {
     setInterval(() => {
     
      this.check();
      this.regenerateTrack();
      runInteractiveConsole()
       this.view.render(this.track);
    },100);
    // добавление звука

  }

 
module.exports = Game;
