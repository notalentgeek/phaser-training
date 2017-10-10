/*
In this game we are practically creating new spritesheet based from a
non-spritesheet image files.
*/

var phaser_main = function () {
  var ANIMATION = Object.freeze({
    FLOAT:"float"
  });

  var ASSET_STRING = Object.freeze({
      BLUE_ORB_CHARACTER: "blue_orb_character",
      BLUE_ORB_DYNAMIC_CHARACTER: "blue_orb_dynamic_character"
  });
  
  var FILE_NAME = Object.freeze({
    BLUE_ORB_CHARACTER: "/blue_orb_character.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var phoenix_character;

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        var blue_orb_character = this.game.make.sprite(
          0,
          0,
          ASSET_STRING.BLUE_ORB_CHARACTER
        );

        // Create a bitmap data.
        var bitmap_data = this.game.add.bitmapData(352, 22);

        /*
        Next is to draw the blue orb image into the `bitmapData` 16
        times.
        */
        
        var x = 0;
        var y = -22;

        for (var i = 0; i < 16; i ++) {
          bitmap_data.draw(blue_orb_character, x, y);
          x += 22;
          y += 3;  
        }

        /*
        Add to display so we can see what is the final version of the sprite
        looks like.
        */
        this.game.add.image(0, 0, bitmap_data);

        // Add our newly created spritesheet into on-the-run game cache.
        this.game.cache.addSpriteSheet(
          ASSET_STRING.BLUE_ORB_DYNAMIC_CHARACTER,
          "",
          bitmap_data.canvas,
          22, // The width of the sprite.
          22, // The height of the sprite.
          16, // How many sprite are there.
          0, // Margin between sprite.
          0 // Spacing between sprite.
        );

        // Create a lot of animation.
        for (var i = 0; i < 16; i ++) {
          var blue_orb_dynamic_character = this.game.add.sprite(
            0,
            (i*22),
            ASSET_STRING.BLUE_ORB_DYNAMIC_CHARACTER
          );
          blue_orb_dynamic_character.animations.add(ANIMATION.FLOAT);
          //blue_orb_dynamic_character.play(ANIMATION.FLOAT, 60, true);
          blue_orb_dynamic_character.play(ANIMATION.FLOAT, 60 + i, true);
        }
      },
      preload:function () {
        this.game.load.image(
          ASSET_STRING.BLUE_ORB_CHARACTER,
          PATH.ASSETS + FILE_NAME.BLUE_ORB_CHARACTER
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}