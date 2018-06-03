function Animal(species, sound) {
    var _sound = sound;
    var _that = this;

    this.species = species;

    function _logSpeciesAndSound() {
        console.log(_sound + ": " + _that.species);
    }

    this.logSound = function() {
        console.log("logSound(): " + _sound);
        _logSpeciesAndSound();
    }
}

const dog = new Animal("Canis lupus familiaris", "Woof!");
console.log("dog.species: " + dog.species);
dog.logSound();
