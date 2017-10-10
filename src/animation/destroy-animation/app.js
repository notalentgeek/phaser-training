var phaser_main = function () {
  var ANIMATION = Object.freeze({
    WALK:"walk"
  });

  var ASSET_STRING = Object.freeze({
    MUMMY_CHARACTER:"mummy_character"
  });
  
  var FILE_NAME = Object.freeze({
    MUMMY_CHARACTER:"/mummy_character.png"
  });
  
  var PATH = Object.freeze({
    ASSETS: "./assets"
  });

  var STRING = Object.freeze({
    DESTROYED: "destroyed: ",
    GROUP_SIZE: "group size: "
  });

  var dead_mummies_count = 0;
  var mummies_group;

  var check_mummy = function (mummy, mummies_group) {
    try {
      if (mummy.x > this.width) {
        dead_mummies_count ++;

        // The second parameter is used to destroy the removed object.
        mummies_group.remove(mummy, true);
      }
    }
    catch (error) {
      console.warn(error);
    }
  };

  var create_mummy = function () {
    var mummy_character = mummies_group.create(
      0,
      this.world.randomY,
      ASSET_STRING.MUMMY_CHARACTER
    );
    mummy_character.animations.add(ANIMATION.WALK);
    mummy_character.play(ANIMATION.WALK, 10, true);
  };

  new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "phaser",
    {
      create:function () {
        mummies_group = this.add.group();

        /*
        `time.events` is bound to the Phaser main timer. `time.events`
        itself is a `Phaser.Timer` object.

        The first parameter is the time in millisecond, then followed by
        a callback function, context, and then, if any, the parameter(s) for
        the callback function.
        */
        this.time.events.loop(50, create_mummy, this);
      },
      preload:function () {
        this.load.spritesheet(
          ASSET_STRING.MUMMY_CHARACTER,
          PATH.ASSETS + FILE_NAME.MUMMY_CHARACTER,
          37,
          45,
          18
        );
      },
      render:function (){
        this.game.debug.text(STRING.GROUP_SIZE + mummies_group.total, 32, 32);
        this.game.debug.text(STRING.DESTROYED + dead_mummies_count, 32, 64);
      },
      update:function (){
        /*
        The `set_all()` function is used to set properties of all objects
        in a `Phaser.Group`. The fist parameter is the property name
        (variable name), the second parameter is the value set. The next two
        booleans are intended if `setAll()` is meant to set objects that is
        still alive and visible or not, respectively.

        In this case only objects that are both alive and visible will have
        their `x` set to `10.`

        The last parameter are meant so that the operation meant to add
        additional `10` for `x` every time this `setAll()` executed.

        Here is a link, refer to the documentation of `set_all()`:
        https://photonstorm.github.io/phaser-ce/Phaser.Group.html#setAll
        */
        mummies_group.setAll("x", 10, true, true, 1);

        /*
        Execute a function for each objects in the `Phaser.Group`. The
        second parameter is context (when developing with Phaser, usually
        the context is the `Phaser.Game` in the root of the application).

        The fourth argument is optional. It is used to set if `forEach()`
        will only look for objects that has property `exists` equals to
        `true`.

        The last parameter is the parameters for the function supplied as
        the first parameter.

        Here is documentation that refers to `forEach()`:
        https://photonstorm.github.io/phaser-ce/Phaser.Group.html#forEach
        */
        mummies_group.forEach(
          check_mummy,
          this,
          true,
          false,
          mummies_group
        );
      }
    }
  );
};
phaser_main = new anyton(phaser_main, []);

window.onload = function () {
  var app = phaser_main.create_instance();
}