var phaser_main = function () {
  var ANIMATION = Object.freeze({
    SWIM:"swim"
  });

  var ASSET_STRING = Object.freeze({
    GREEN_JELLYFISH:"green_jellyfish",
    SEABED:"seabed",
    UNDERSEA:"undersea"
  });

  var FILE_NAME = Object.freeze({
    SEA_CREATURES_MAP:"/sea_creatures_map.xml",
    SEA_CREATURES_TEXTURE:"/sea_creatures_texture.png",
    SEABED:"/seabed.png",
    UNDERSEA:"/undersea.jpg"
  });

  var MAP_STRING_ANIMATED = Object.freeze({
    GREEN_JELLYFISH:"greenJellyfish"
  });

  var MAP_STRING_STATIC = Object.freeze({
    GREEN_JELLYFISH:"greenJellyfish0000"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var green_jellyfish_character;

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        this.game.add.image(0, 0, ASSET_STRING.UNDERSEA);

        // This sprite is added, so that the first frame can be known.
        this.game.add.sprite(32, 32, ASSET_STRING.GREEN_JELLYFISH, MAP_STRING_STATIC.GREEN_JELLYFISH);

        // Added the real animated green jellyfish sprite.
        green_jellyfish_character = this.game.add.sprite(0, 0,
          ASSET_STRING.GREEN_JELLYFISH);
        green_jellyfish_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            MAP_STRING_ANIMATED.GREEN_JELLYFISH, 0, 39, "", 4),
          30, true
        );
        green_jellyfish_character.animations.play(ANIMATION.SWIM);

        this.game.add.image(0, 466, ASSET_STRING.SEABED);
        this.game.add.tween(green_jellyfish_character).to({ y:250 }, 4000,
          Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.input.onDown.addOnce(function () {
          green_jellyfish_character.animations.stop(null, true);
        }, this);
      },
      preload:function () {
        this.game.load.atlasXML(
          ASSET_STRING.GREEN_JELLYFISH,
          PATH.ASSETS + FILE_NAME.SEA_CREATURES_TEXTURE,
          PATH.ASSETS + FILE_NAME.SEA_CREATURES_MAP
        );

        this.game.load.image(
          ASSET_STRING.UNDERSEA,
          PATH.ASSETS + FILE_NAME.UNDERSEA
        );
        this.game.load.image(
          ASSET_STRING.SEABED,
          PATH.ASSETS + FILE_NAME.SEABED
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}