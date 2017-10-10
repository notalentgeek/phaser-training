var phaser_main = function () {
  var ANIMATION = Object.freeze({
    WALK:"walk"
  });

  var ASSET_STRING = Object.freeze({
    MONSTER_CHARACTER:"monster_character",
    MUMMY_CHARACTER:"mummy_character"
  });
  
  var FILE_NAME = Object.freeze({
    MONSTER_CHARACTER:"/monster_character.png",
    MUMMY_CHARACTER:"/mummy_character.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var character;

  var change_texture = function (
    pointer,
    pointer_event,
    sprite
  ) {
    if (sprite.key === ASSET_STRING.MONSTER_CHARACTER) {
      sprite.loadTexture(ASSET_STRING.MUMMY_CHARACTER, 0, false);
    }
    else if (sprite.key === ASSET_STRING.MUMMY_CHARACTER) {
      sprite.loadTexture(ASSET_STRING.MONSTER_CHARACTER, 0, false);
    }

    sprite.smoothed = false;
  };

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        character = this.game.add.sprite(300, 200,
          ASSET_STRING.MONSTER_CHARACTER);
        character.animations.add(
          ANIMATION.WALK,
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        );
        character.animations.play(ANIMATION.WALK, 20, true);
        character.scale.set(4);
        character.smoothed = false;

        this.game.input.onDown.add(change_texture, this, 0, character);
      },
      preload:function () {
        this.game.load.spritesheet(
          ASSET_STRING.MONSTER_CHARACTER,
          PATH.ASSETS + FILE_NAME.MONSTER_CHARACTER,
          39, 40
        );
        this.game.load.spritesheet(
          ASSET_STRING.MUMMY_CHARACTER,
          PATH.ASSETS + FILE_NAME.MUMMY_CHARACTER,
          37, 45, 18
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}