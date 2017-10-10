var javascript_operation = Object.freeze({
  /*
  Function used to extend the JavaScript main array. Push an element to array
  if there is still "space" in the array.
  */
  push_with_limit: function (array, element) {
    /*
    CAUTION: Please, set the `array.array_limit` variable just after array
    declaration.
    */

    if (array.length < array.array_limit) {
      array.push(element);
    }
    return array;
  }
});
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
    console.log(animation_manager._anims);
    console.log(animation_manager);
    if (!animation_manager._anims) {
      return [];
    }

    return Object.keys(animation_manager._anims);
  }
});