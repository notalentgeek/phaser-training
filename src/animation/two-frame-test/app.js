var phaser_main = function () {
  var ANIMATION = Object.freeze({
    DOWN:"down",
    LEFT:"left",
    RIGHT:"right",
    UP:"up"
  });

  var ASSET_STRING = Object.freeze({
    SPACEMAN_CHARACTER:"spaceman_character"
  });

  var FILE_NAME = Object.freeze({
    SPACEMAN_CHARACTER:"/spaceman_character.png"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var cursor;
  var left_animation;
  var right_animation;
  var spaceman_character;

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        this.game.stage.setBackgroundColor("#FF00FF");

        spaceman_character = this.game.add.sprite(0, 0,
          ASSET_STRING.SPACEMAN_CHARACTER, 1);
        spaceman_character.scale.set(4);
        spaceman_character.anchor.setTo(0.5, 0.5);
        spaceman_character.x = this.game.world.centerX;
        spaceman_character.y = this.game.world.centerY;
        spaceman_character.smoothed = false;

        // Set the movement animations.
        left_animation = spaceman_character.animations.add(ANIMATION.LEFT,
          [8, 9], 10, true);
        right_animation = spaceman_character.animations.add(ANIMATION.RIGHT,
          [1, 2], 10, true);
        spaceman_character.animations.add(ANIMATION.DOWN, [4, 5, 6], 10, true);
        spaceman_character.animations.add(ANIMATION.UP, [11, 12, 13], 10,
          true);

        // Enable the game physics engine.
        this.game.physics.enable(spaceman_character, Phaser.Physics.ARCADE);

        // Create control cursor.
        cursor = this.game.input.keyboard.createCursorKeys();
      },
      preload:function () {
        this.game.load.spritesheet(
          ASSET_STRING.SPACEMAN_CHARACTER,
          PATH.ASSETS + FILE_NAME.SPACEMAN_CHARACTER,
          16, 16
        );
      },
      render:function () {
        this.game.debug.text(spaceman_character.frame, 32, 32);
      },
      update:function () {
        spaceman_character.body.velocity.set(0);

        if (cursor.down.isDown) {
          spaceman_character.body.velocity.y = 100;
          spaceman_character.play(ANIMATION.DOWN);
        }
        else if (cursor.left.isDown) {
          spaceman_character.body.velocity.x = -100;
          spaceman_character.play(ANIMATION.LEFT);
        }
        else if (cursor.right.isDown) {
          spaceman_character.body.velocity.x = 100;
          spaceman_character.play(ANIMATION.RIGHT);
        }
        else if (cursor.up.isDown) {
          spaceman_character.body.velocity.y = -100;
          spaceman_character.play(ANIMATION.UP);
        }
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}