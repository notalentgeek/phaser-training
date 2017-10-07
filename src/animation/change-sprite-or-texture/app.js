var phaser_main = function () {
  var ANIMATION = Object.freeze({
    CIRCLE_ANIMATION:"circle_animation",
    RECTANGULAR_ANIMATION:"rectangular_animation"
  });
  
  var ASSET_STRING = Object.freeze({
    DUMMY_CHARACTER_CIRCLE_SPRITE:"dummy_character_circle_sprite",
    DUMMY_CHARACTER_RECTANGULAR_SPRITE:"dummy_character_rectangular_sprite"
  });
  
  var FILE_NAME = Object.freeze({
    DUMMY_CHARACTER_CIRCLE_SPRITE:"/dummy_character_circle_sprite.png",
    DUMMY_CHARACTER_RECTANGULAR_SPRITE:
      "/dummy_character_rectangular_sprite.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var dummy_character;

  var change_sprite = function (pointer, pointer_event, sprite) {
    var used_animation;
    var used_framerate;
    var used_key;
    if (sprite.key === ASSET_STRING.DUMMY_CHARACTER_CIRCLE_SPRITE) {
      used_animation = ANIMATION.RECTANGULAR_ANIMATION;
      used_framerate = 2;
      used_key = ASSET_STRING.DUMMY_CHARACTER_RECTANGULAR_SPRITE;
    }
    else if (sprite.key === ASSET_STRING.DUMMY_CHARACTER_RECTANGULAR_SPRITE) {
      used_animation = ANIMATION.CIRCLE_ANIMATION;
      used_framerate = 1;
      used_key = ASSET_STRING.DUMMY_CHARACTER_CIRCLE_SPRITE;
    }

    sprite.loadTexture(used_key, 0);
    sprite.animations.add(used_animation);
    sprite.animations.play(
      used_animation,
      used_framerate,
      true
    );
  };

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        this.stage.backgroundColor = "#F47D30";
        dummy_character = this.add.image(
          this.world.centerX,
          this.world.centerY,
          ASSET_STRING.DUMMY_CHARACTER_RECTANGULAR_SPRITE
        );
        dummy_character.anchor.setTo(0.5, 0.5);
        dummy_character.animations.add(ANIMATION.RECTANGULAR_ANIMATION);
        dummy_character.animations.play(
          ANIMATION.RECTANGULAR_ANIMATION,
          2,
          true
        );

        this.input.onDown.add(
          change_sprite,
          this,
          0,
          dummy_character
        );
      },
      preload:function () {
        this.load.spritesheet(
          ASSET_STRING.DUMMY_CHARACTER_CIRCLE_SPRITE,
          PATH.ASSETS + FILE_NAME.DUMMY_CHARACTER_CIRCLE_SPRITE,
          163,
          163
        );
        this.load.spritesheet(
          ASSET_STRING.DUMMY_CHARACTER_RECTANGULAR_SPRITE,
          PATH.ASSETS + FILE_NAME.DUMMY_CHARACTER_RECTANGULAR_SPRITE,
          128,
          128
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}