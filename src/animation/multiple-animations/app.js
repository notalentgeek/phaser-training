var phaser_main = function () {
  var ANIMATION = Object.freeze({
    SWIM:"swim"
  });

  var ASSET_STRING = Object.freeze({
    SEA_CREATURES:"sea_creatures",
    SEABED:"seabed",
    UNDERSEA:"undersea"
  });

  var FILE_NAME = Object.freeze({
    SEA_CREATURES_DATA:"/sea_creatures.xml",
    SEA_CREATURES_TEXTURE:"/sea_creatures.png",
    SEABED:"/seabed.png",
    UNDERSEA:"/undersea.jpg"
  });

  var FRAME_NAME = Object.freeze({
    BLUE_JELLYFISH:"blueJellyfish",
    CRAB:"crab1",
    GREEN_JELLYFISH:"greenJellyfish",
    OCTOPUS:"octopus",
    PURPLE_FISH:"purpleFish",
    SEAHORSE:"seahorse",
    STINGRAY:"stingray"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var SPRITE_DATA_STRING = Object.freeze({
    FLYING_FISH:"flyingFish0000",
    SQUID:"squid0000"
  });

  var crab_character;
  var flying_fish_character;
  var green_jellyfish_character;
  var jellyfish_character;
  var octopus_character;
  var purple_fish_character;
  var seahorse_character;
  var squid_character;
  var stingray_character;

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        this.game.add.image(0, 0, ASSET_STRING.UNDERSEA);

        jellyfish_character = this.game.add.sprite(670, 20,
          ASSET_STRING.SEA_CREATURES);
        jellyfish_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.BLUE_JELLYFISH, 0, 32, "", 4
          ),
          30, true
        );
        jellyfish_character.animations.play(ANIMATION.SWIM);

        crab_character = this.game.add.sprite(550, 480,
          ASSET_STRING.SEA_CREATURES);
        crab_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.CRAB, 0, 25, "", 4
          ),
          30, true
        );
        crab_character.animations.play(ANIMATION.SWIM);

        green_jellyfish_character = this.game.add.sprite(550, 480,
          ASSET_STRING.SEA_CREATURES);
        green_jellyfish_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.GREEN_JELLYFISH, 0, 39, "", 4
          ),
          30, true
        );
        green_jellyfish_character.animations.play(ANIMATION.SWIM);

        octopus_character = this.game.add.sprite(160, 400,
          ASSET_STRING.SEA_CREATURES);
        octopus_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.OCTOPUS, 0, 24, "", 4
          ),
          30, true
        );
        octopus_character.animations.play(ANIMATION.SWIM);

        purple_fish_character = this.game.add.sprite(800, 413,
          ASSET_STRING.SEA_CREATURES);
        purple_fish_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.PURPLE_FISH, 0, 20, "", 4
          ),
          30, true
        );
        purple_fish_character.animations.play(ANIMATION.SWIM);

        seahorse_character = this.game.add.sprite(400, 320,
          ASSET_STRING.SEA_CREATURES);
        seahorse_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.SEAHORSE, 0, 5, "", 4
          ),
          30, true
        );
        seahorse_character.animations.play(ANIMATION.SWIM);

        stingray_character = this.game.add.sprite(80, 190,
          ASSET_STRING.SEA_CREATURES);
        stingray_character.animations.add(
          ANIMATION.SWIM,
          Phaser.Animation.generateFrameNames(
            FRAME_NAME.STINGRAY, 0, 23, "", 4
          ),
          30, true
        );
        stingray_character.animations.play(ANIMATION.SWIM);

        flying_fish_character = this.game.add.sprite(60, 40,
          ASSET_STRING.SEA_CREATURES, SPRITE_DATA_STRING.FLYING_FISH);
        squid_character = this.game.add.sprite(610, 215,
          ASSET_STRING.SEA_CREATURES, SPRITE_DATA_STRING.SQUID);

        this.game.add.image(0, 466, ASSET_STRING.SEABED);

        this.game.add.tween(
          green_jellyfish_character).to({ y: 250 },
          4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(
          jellyfish_character).to({ y: 100 },
          8000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(
          octopus_character).to({ y: 530 },
          2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(
          purple_fish_character).to({ x: -200 },
          7500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);
      },
      preload:function () {
        // In Phaser the mapping can be in JSON or XML format.
        this.game.load.atlasXML(
          ASSET_STRING.SEA_CREATURES,
          PATH.ASSETS + FILE_NAME.SEA_CREATURES_TEXTURE,
          PATH.ASSETS + FILE_NAME.SEA_CREATURES_DATA
        );
        this.game.load.image(
          ASSET_STRING.SEABED,
          PATH.ASSETS + FILE_NAME.SEABED
        );
        this.game.load.image(
          ASSET_STRING.UNDERSEA,
          PATH.ASSETS + FILE_NAME.UNDERSEA
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}