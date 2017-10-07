var phaser_operation = Object.freeze({
  get_last_frame_index_from_sprite: function (
    sprite,
    number_of_try
  ) {
    // Safety net.
    number_of_try = !number_of_try ? 100 : number_of_try;
  
    var current_index = 0;
    var previous_index = 0;

    var i = 0;
    while (i < number_of_try) {
      previous_index = sprite.frame;
      sprite.frame ++;
      current_index = sprite.frame;

      if (previous_index > current_index) {
        return previous_index;
      }

      i ++;
    }

    console.warn(
      sprite + " has more than " + number_of_try + "frame(s)"
    );
    console.warn(
      "please consider to use `Infinity` for `number_of_try`"
    );

    return number_of_try;
  },
  get_list_of_animation_names_in_animation_manager: function (
    animation_manager
  ) {
    return Object.keys(animation_manager._anims);
  }
});