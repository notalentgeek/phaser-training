var phaser_main = function () {
  var ANIMATION = Object.freeze({
    SWIM:"swim"
  });

  var ASSET_STRING = Object.freeze({
    OCTOPUS_CHARACTER: "octopus_character",
    SEABED: "seabed",
    UNDERSEA: "undersea"
  });
  
  var FILE_NAME = Object.freeze({
    OCTOPUS_CHARACTER_MESH: "/octopus_character_mesh.json",
    OCTOPUS_CHARACTER_TEXTURE: "/octopus_character_texture.png",
    SEABED: "/seabed.png",
    UNDERSEA: "/undersea.jpg"
  });

  var KEY = Object.freeze({
    OCTOPUS:"octopus0000"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var STRING = Object.freeze({
    OCTOPUS:"octopus"
  });

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        this.game.add.sprite(0, 0, ASSET_STRING.UNDERSEA);
        var octopuses_group = this.game.add.group();

        // Create six octopuses.
        for (var i = 0; i < 6; i ++) {
          octopuses_group.create(
            120*i,
            this.game.rnd.integerInRange(100, 400),
            ASSET_STRING.OCTOPUS_CHARACTER,
            KEY.OCTOPUS
          );
        }

        // There are frame names in each of the octopus animation.
        var frame_names = Phaser.Animation.generateFrameNames(
          STRING.OCTOPUS, 0, 24, "", 4);

        octopuses_group.callAll("animations.add", "animations",
          ANIMATION.SWIM, frame_names, 30, true, false);
        octopuses_group.callAll("play", null, ANIMATION.SWIM);

        this.game.add.sprite(0, 466, ASSET_STRING.SEABED);
      },
      preload:function () {
        this.game.load.atlas(
          ASSET_STRING.OCTOPUS_CHARACTER,
          PATH.ASSETS + FILE_NAME.OCTOPUS_CHARACTER_TEXTURE,
          PATH.ASSETS + FILE_NAME.OCTOPUS_CHARACTER_MESH
        );
        this.game.load.image(
          ASSET_STRING.SEABED,
          PATH.ASSETS + FILE_NAME.SEABED
        );
        this.game.load.image(
          ASSET_STRING.UNDERSEA,
          PATH.ASSETS +FILE_NAME.UNDERSEA
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}