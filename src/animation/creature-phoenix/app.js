var phaser_main = function () {  
    var ASSET_STRING = Object.freeze({
      BACKGROUND:"background",
      PHOENIX_CHARACTER_MESH:"phoenix_character_mesh",
      PHOENIX_CHARACTER_TEXTURE:"phoenix_character"
    });
    
    var FILE_NAME = Object.freeze({
      BACKGROUND:"/background.png",
      PHOENIX_CHARACTER_MESH:"/phoenix_character_mesh.json",
      PHOENIX_CHARACTER_TEXTURE:"/phoenix_character_texture.png"
    });
    
    var PATH = Object.freeze({
      ASSETS: "./assets"
    });
  
    var phoenix_character;
  
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.WEBGL,
      "phaser",
      {
        create:function () {
          this.stage.backgroundColor = "#F47D30";
          this.add.image(0, 0, ASSET_STRING.BACKGROUND);
  
          var phoenix_character = this.add.creature(
            this.world.centerX,
            this.world.centerY,
            ASSET_STRING.PHOENIX_CHARACTER_TEXTURE,
            ASSET_STRING.PHOENIX_CHARACTER_MESH
          );
          phoenix_character.play(true); // `true` is used for looping forever.
          phoenix_character.scale.set(20);
        },
        preload:function () {
          this.load.image(
            ASSET_STRING.BACKGROUND,
            PATH.ASSETS + FILE_NAME.BACKGROUND
  
          );
          this.load.image(
            ASSET_STRING.PHOENIX_CHARACTER_TEXTURE,
            PATH.ASSETS + FILE_NAME.PHOENIX_CHARACTER_TEXTURE
  
          );
          this.load.json(
            ASSET_STRING.PHOENIX_CHARACTER_MESH,
            PATH.ASSETS + FILE_NAME.PHOENIX_CHARACTER_MESH
          );
        }
      }
    );
  };
  phaser_main = new anyton(phaser_main, []);
  
  window.onload = function () {
    var app = phaser_main.create_instance();
  }