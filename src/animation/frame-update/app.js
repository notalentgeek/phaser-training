/*
This example shows on how a function can be executed when a sprite object
changed sprite.
*/

var phaser_main = function () {
  var ANIMATION = Object.freeze({
    WALK: "walk"
  });

  var ASSET_STRING = Object.freeze({
    MUMMY_CHARACTER: "mummy_character"
  });
  
  var FILE_NAME = Object.freeze({
    MUMMY_CHARACTER: "/mummy_character.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var mummy_character;
  var text;
  var walk_animation;

  var on_update = function (animation, frame) {
    text.text = "Frame " + frame.index;
  };

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        mummy_character = this.game.add.sprite(
          300,
          200,
          ASSET_STRING.MUMMY_CHARACTER
        );
        walk_animation = mummy_character.animations.add(ANIMATION.WALK);
        walk_animation.enableUpdate = true;
        walk_animation.onUpdate.add(on_update, this);

        mummy_character.animations.play(ANIMATION.WALK, 5, true);

        text = this.game.add.text(
          300,
          264,
          "Frame 1",
          { fill:"#FF0044", font:"28px Arial" }
        );
      },
      preload:function () {
        this.game.load.spritesheet(
          ASSET_STRING.MUMMY_CHARACTER,
          PATH.ASSETS + FILE_NAME.MUMMY_CHARACTER,
          37,
          45,
          18
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}