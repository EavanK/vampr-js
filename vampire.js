class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampiresAway = 0;
    let VampireFromOriginal = this;

    while (VampireFromOriginal.creator) {
      VampireFromOriginal = VampireFromOriginal.creator;
      numberOfVampiresAway++
    }
    return numberOfVampiresAway;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const senior = this.numberOfVampiresFromOriginal;
    const junior = vampire.numberOfVampiresFromOriginal;
    return senior < junior;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    if (vampire.creator === this || this.creator === vampire.creator) {
      return this;
    }

    let anscestor = this;

    while (anscestor.creator){

    if (anscestor.creator === vampire) {
      return vampire;
    }
    anscestor = anscestor.creator;
    }

    let lineage = vampire;

    while (lineage.creator) {

      if (lineage.creator === this) {
        return this;
      }
      lineage = lineage.creator;
    }
  }


}




module.exports = Vampire;