var phaser_main = function () {
  var ASSET_STRING = Object.freeze({
    DUMMY_CHARACTER_SPRITE: "dummy_character_sprite"
  });
  
  var FILE_NAME = Object.freeze({
    DUMMY_CHARACTER_SPRITE: "/dummy_character_sprite.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var dummy_character;

  var change_frame = function (
    pointer,
    pointer_event,
    sprite
  ) {
    /*
    `sprite.frame` is automatically limited to how many frames
    are there in the sprite object.
    */
    sprite.frame ++;
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
          ASSET_STRING.DUMMY_CHARACTER_SPRITE
        );
        dummy_character.anchor.setTo(0.5, 0.5);

        /*
        With this codes, the whole game is listening to when
        mouse pointer is down.
        */
        this.input.onDown.add(
          change_frame,
          this,
          0,
          dummy_character
        );
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