var phaser_main = function () {
  var ANIMATION = Object.freeze({
    RUN:"run"
  });

  var ASSET_STRING = Object.freeze({
    BOT_CHARACTER:"bot_character"
  });
  
  var FILE_NAME = Object.freeze({
    BOT_CHARACTER:"/bot_character.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var bot_character;
  var bot_json_data = {
    "frames": [
      {
        "filename": "running bot.swf/0000",
        "frame": { "x": 34, "y": 128, "w": 56, "h": 60 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 2, "w": 56, "h": 60 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0001",
        "frame": { "x": 54, "y": 0, "w": 56, "h": 58 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0002",
        "frame": { "x": 54, "y": 58, "w": 56, "h": 58 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0003",
        "frame": { "x": 0, "y": 192, "w": 34, "h": 64 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 11, "y": 0, "w": 34, "h": 64 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0004",
        "frame": { "x": 0, "y": 64, "w": 54, "h": 64 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 1, "y": 0, "w": 54, "h": 64 },
        "trimmed": true,
      },
      {
        "filename": "running bot.swf/0005",
        "frame": { "x": 196, "y": 0, "w": 56, "h": 58 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0006",
        "frame": { "x": 0, "y": 0, "w": 54, "h": 64 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 1, "y": 0, "w": 54, "h": 64 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0007",
        "frame": { "x": 140, "y": 0, "w": 56, "h": 58 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0008",
        "frame": { "x": 34, "y": 188, "w": 50, "h": 60 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 3, "y": 2, "w": 50, "h": 60 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0009",
        "frame": { "x": 0, "y": 128, "w": 34, "h": 64 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 11, "y": 0, "w": 34, "h": 64 },
        "trimmed": true
      },
      {
        "filename": "running bot.swf/0010",
        "frame": { "x": 84, "y": 188, "w": 56, "h": 58 },
        "rotated": false,
        "sourceSize": { "w": 56, "h": 64 },
        "spriteSourceSize": { "x": 0, "y": 3, "w": 56, "h": 58 },
        "trimmed": true
      }
    ],
    "meta": {
      "app": "http://www.texturepacker.com",
      "format": "RGBA8888",
      "image": "running_bot.png",
      "scale": "0.2",
      "size": { "w": 252, "h": 256 },
      "smartupdate": "$TexturePacker:SmartUpdate:fb56f261b1eb04e3215824426595f64c$",
      "version": "1.0"
    }
  }; 


  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        bot_character = this.game.add.sprite(
          this.game.world.centerX,
          this.game.world.centerY,
          ASSET_STRING.BOT_CHARACTER
        );
        bot_character.anchor.setTo(0.5, 0.5);
        bot_character.animations.add(ANIMATION.RUN);
        bot_character.animations.play(ANIMATION.RUN, 10, true);
      },
      preload:function () {
        this.game.load.atlas(
          ASSET_STRING.BOT_CHARACTER,
          PATH.ASSETS + FILE_NAME.BOT_CHARACTER,
          null, bot_json_data
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}