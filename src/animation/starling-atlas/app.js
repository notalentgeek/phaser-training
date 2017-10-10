var phaser_main = function () {
  var ANIMATION = Object.freeze({
    SWIM:"swim"
  });

  var ASSET_STRING = Object.freeze({
    OCTOPUS_CHARACTER:"octopus_character"
  });

  var FILE_NAME = Object.freeze({
    OCTOPUS_CHARACTER_TEXTURE:"/octopus_character_texture.png",
    OCTOPUS_CHARACTER_XML:"/octopus_character_xml.xml"
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
        this.game.stage.backgroundColor = "#1873CE";

        var octopus_character = this.game.add.sprite(0, 0,
          ASSET_STRING.OCTOPUS_CHARACTER
        );
        octopus_character.x = this.game.world.centerX - octopus_character.width/2;
        octopus_character.y = this.game.world.centerY - 100;
        octopus_character.animations.add(ANIMATION.SWIM);
        octopus_character.animations.play(ANIMATION.SWIM, 30, true);

        // Make the octopus to move along with Phaser built-in tween method.
        this.game.add.tween(octopus_character).to(
          { y:this.game.world.centerY },
          2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
      },
      preload:function () {
        this.game.load.atlasXML(
          ASSET_STRING.OCTOPUS_CHARACTER,
          PATH.ASSETS + FILE_NAME.OCTOPUS_CHARACTER_TEXTURE,
          PATH.ASSETS + FILE_NAME.OCTOPUS_CHARACTER_XML
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}
