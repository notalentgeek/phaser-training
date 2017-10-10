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




var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    game.load.image('undersea', 'assets/pics/undersea.jpg');
    game.load.image('coral', 'assets/pics/seabed.png');

}

var greenJellyfish;

function create() {

    game.add.image(0, 0, 'undersea');

    //  We add this sprite so you can see what frame 1 looks like
    game.add.sprite(32, 32, 'seacreatures', 'greenJellyfish0000');

    greenJellyfish = game.add.sprite(330, 100, 'seacreatures');
    greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    greenJellyfish.animations.play('swim');

    game.add.image(0, 466, 'coral');

    game.add.tween(greenJellyfish).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    game.input.onDown.addOnce(stopAnimation, this);

}

function stopAnimation() {

    //  This will just top the animation from running, freezing it at its current frame
    // greenJellyfish.animations.stop();

    //  This method will reset the frame to frame 1 after stopping
    greenJellyfish.animations.stop(null, true);

}
