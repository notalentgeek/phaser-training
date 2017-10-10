var phaser_main = function () {
  var ASSET_STRING = Object.freeze({});
  
  var FILE_NAME = Object.freeze({});
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  this.game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {},
      preload:function () {}
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}