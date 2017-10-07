var anyton = function (ton, parameters, init_count) {
  if (!init_count) {
    init_count = 1; // Singleton.
  }

  var instances = [];

  this.create_instance = function () {
    if (instances.length < init_count) {
      instances.push(new ton(...parameters)); // No pun intended.
    }

    return instances[instances.length - 1];
  };
};