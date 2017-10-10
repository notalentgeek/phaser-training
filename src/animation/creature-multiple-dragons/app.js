var phaser_main = function () {  
    var ASSET_STRING = Object.freeze({
      BACKGROUND:"background",
      DRAGON_CHARACTER_MESH:"dragon_character_mesh",
      DRAGON_CHARACTER_TEXTURE:"dragon_character"
    });
    
    var FILE_NAME = Object.freeze({
      BACKGROUND:"/background.png",
      DRAGON_CHARACTER_MESH:"/dragon_character_mesh.json",
      DRAGON_CHARACTER_TEXTURE:"/dragon_character_texture.png"
    });
    
    var PATH = Object.freeze({
      ASSETS: "./assets"
    });
  
    var dragon_characters = [];
    dragon_characters.array_limit = 2;
    dragon_characters.push_with_limit = function (element) {
      return javascript_operation.push_with_limit(
        this,
        element
      );
    };
  
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.WEBGL,
      "phaser",
      {
        create:function () {
          this.stage.backgroundColor = "#F47D30";
          this.add.image(0, 0, ASSET_STRING.BACKGROUND);
  
          var dragon_character;

          // Small dragon.
          dragon_character = this.add.creature(
            this.world.centerX,
            this.world.centerY,
            ASSET_STRING.DRAGON_CHARACTER_TEXTURE,
            ASSET_STRING.DRAGON_CHARACTER_MESH
          );
          dragon_character.play(true); // `true` is used for looping forever.
          dragon_character.scale.set(1);
          console.log("==========");
          console.log("after setting up scale and before setting up width and height");
          console.log("scale.x = " + dragon_character.scale.x); // `1`, which is expected.
          console.log("scale.y = " + dragon_character.scale.y); // `1`, which is expected.
          console.log("height = " + dragon_character.height); // `undefined`, which is expected.
          console.log("width = " + dragon_character.width); // `undefined`, which is expected.
          console.log("==========");
          dragon_character.height = dragon_character.scale.y*100;
          dragon_character.width = dragon_character.scale.x*100;
          console.log("==========");
          console.log("after setting up scale and after setting up width and height");
          console.log("scale.x = " + dragon_character.scale.x); // `0`, which is NOT expected.
          console.log("scale.y = " + dragon_character.scale.y); // `4.138100158128295`, which is NOT expected.
          console.log("height = " + dragon_character.height); // `100`, which is expected.
          console.log("width = " + dragon_character.width); // `0`, which is expected, if the `scale.x` is indeed `0`.
          console.log("==========");
          dragon_characters.push_with_limit(dragon_character);

          // Larger dragon.
          /*
          dragon_character = this.add.creature(
            this.world.centerX,
            this.world.centerY,
            ASSET_STRING.DRAGON_CHARACTER_TEXTURE,
            ASSET_STRING.DRAGON_CHARACTER_MESH
          );
          dragon_character.play(true); // `true` is used for looping forever.
          dragon_character.scale.set(40);
          dragon_characters.push_with_limit(dragon_character);
          */
        },
        preload:function () {
          this.load.image(
            ASSET_STRING.BACKGROUND,
            PATH.ASSETS + FILE_NAME.BACKGROUND
  
          );
          this.load.image(
            ASSET_STRING.DRAGON_CHARACTER_TEXTURE,
            PATH.ASSETS + FILE_NAME.DRAGON_CHARACTER_TEXTURE
  
          );
          this.load.json(
            ASSET_STRING.DRAGON_CHARACTER_MESH,
            PATH.ASSETS + FILE_NAME.DRAGON_CHARACTER_MESH
          );
        },
        update:function () {
          dragon_characters[0].x += 2;
          if (dragon_characters[0].x > this.world.width + 400) {
            dragon_characters[0].x = -400;
          }

          /*
          dragon_characters[1].x += 2;
          if (dragon_characters[1].x > this.world.width + 600) {
            dragon_characters[1].x = -600;
          }
          */
        }
      }
    );
  };
  phaser_main = new anyton(phaser_main, []);
  
  window.onload = function () {
    var app = phaser_main.create_instance();
  }