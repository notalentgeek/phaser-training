var phaser_main = function () {
  var ANIMATION = Object.freeze({
    WALK:"walk"
  });

  var ASSET_STRING = Object.freeze({
    MUMMY_CHARACTER:"mummy_character"
  });

  var FILE_NAME = Object.freeze({
    MUMMY_CHARACTER:"/mummy_character.png"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        var mummy_character = this.game.add.sprite(0, 0,
          ASSET_STRING.MUMMY_CHARACTER);
        mummy_character.anchor.setTo(0.5, 0.5);
        mummy_character.smoothed = false;
        mummy_character.x = this.game.world.centerX;
        mummy_character.y = this.game.world.centerY;
        var mummy_walk_animation = mummy_character.animations.add(
          ANIMATION.WALK
        );
        mummy_character.animations.play(ANIMATION.WALK, 30, true);
      },
      preload:function () {
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
