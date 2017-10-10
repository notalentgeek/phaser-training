var phaser_main = function () {
  var ANIMATION = Object.freeze({
    RUN:"run"
  });

  var ASSET_STRING = Object.freeze({
    BOT_CHARACTER:"bot_character"
  });

  var FILE_NAME = Object.freeze({
    BOT_CHARACTER_JSON:"/bot_character_json.json",
    BOT_CHARACTER_TEXTURE:"/bot_character_texture.png"
  });

  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var bot_character;

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        bot_character = this.game.add.sprite(
          this.game.world.width,
          this.game.world.centerY,
          ASSET_STRING.BOT_CHARACTER
        );
        bot_character.anchor.setTo(0.5, 0.5);
        bot_character.animations.add(ANIMATION.RUN);
        bot_character.animations.play(ANIMATION.RUN, 15, true);
      },
      preload:function () {
        this.game.load.atlasJSONHash(
          ASSET_STRING.BOT_CHARACTER,
          PATH.ASSETS + FILE_NAME.BOT_CHARACTER_TEXTURE,
          PATH.ASSETS + FILE_NAME.BOT_CHARACTER_JSON
        );
      },
      update:function () {
        bot_character.x -= 2;

        if (bot_character.x < -bot_character.width/2) {
          bot_character.x = this.game.world.width + (bot_character.width/2);
        }
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}
