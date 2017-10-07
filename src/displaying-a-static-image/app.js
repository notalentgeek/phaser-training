/*
This script display on how animation can be controlled freely with Phaser.
*/

var phaser_main = function () {
  var ASSET_STRING = Object.freeze({
    PIPLUP_SPRITE: "piplup_sprite"
  });
  
  var FILE_NAME = Object.freeze({
    PIPLUP_SPRITE: "/piplup.png"
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
        var piplup_sprite = this.add.sprite(
          this.world.centerX,
          this.world.centerY,
          ASSET_STRING.PIPLUP_SPRITE
        );
        piplup_sprite.anchor.setTo(0.5, 0.5);
      },
      preload:function () {
        var piplup_sprite_path = PATH.ASSETS + FILE_NAME.PIPLUP_SPRITE;
        this.load.image(
          ASSET_STRING.PIPLUP_SPRITE,
          piplup_sprite_path
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}