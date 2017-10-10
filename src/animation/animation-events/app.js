var phaser_main = function () {
  var ANIMATION = Object.freeze({
    WALK: "walk"
  });

  var ASSET_STRING = Object.freeze({
    DUMMY_CHARACTER_SPRITE: "dummy_character_sprite"
  });
  
  var FILE_NAME = Object.freeze({
    DUMMY_CHARACTER_SPRITE: "/dummy_character_sprite.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var STRING = Object.freeze({
    ANIMATION_COMPLETE: "animation complete",
    ANIMATION_LOOP: "animation loop",
    ANIMATION_START: "animation start",
    X2: "x2"
  });
  
  var animation;
  var dummy_character;
  var loop_text;

  var walk_animation_complete = function () {
    var text = this.add.text(
      32,
      96,
      STRING.ANIMATION_COMPLETE,
      { fill:"white" }
    );
  };

  var walk_animation_loop = function () {
    if (animation.loopCount === 1) {
      loop_text = this.add.text(
        32,
        64,
        STRING.ANIMATION_LOOP,
        { fill:"white" }
      );
    }
    else {
      animation.loop = false;
      loop_text.text = STRING.ANIMATION_LOOP + " " + STRING.X2;
    }
  };

  var walk_animation_start = function () {
    this.add.text(
      32,
      32,
      STRING.ANIMATION_START,
      { fill:"white" }
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
        dummy_character = this.add.sprite(
          this.world.centerX,
          this.world.centerY,
          ASSET_STRING.DUMMY_CHARACTER_SPRITE
        );
        dummy_character.anchor.setTo(0.5, 0.5);
        dummy_character.scale.set(2);
        dummy_character.smoothed = true;

        animation = dummy_character.animations.add(
          ANIMATION.WALK
        );

        // Animation callback to functions.
        animation.onComplete.add(
          walk_animation_complete,
          this
        );
        animation.onLoop.add(
          walk_animation_loop,
          this
        );
        animation.onStart.add(
          walk_animation_start,
          this
        );

        // The first parameter is FPS.
        animation.play(1, true);
      },
      preload:function () {
        this.load.spritesheet(
          ASSET_STRING.DUMMY_CHARACTER_SPRITE,
          PATH.ASSETS + FILE_NAME.DUMMY_CHARACTER_SPRITE,
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