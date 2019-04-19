/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global object binding means that the keyword 'this' refers to an object in the global scope.
* 2. Implcit Binding implies that 'this' is referring to an object in the function scope, and is called with a dot  followed by a property.
* 3. New binding uses constructor functions to create and return objects using a template.
* 4. Explicit Binding allows us to override constructor objects by calling the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function human(name) {
    console.log(this);
    return name;
}

// console.log(human("Brittney"));

// Principle 2
// code example for Implicit Binding

const student = {
  name: "Brittney",
  location: "Nevada",
  email: "BrittneyT@gmail.com",
  study: "Programming",
  sayBio: function() {
    return `Hey there, my  name is ${this.name} from ${this.location}, and I am studying ${this.study}. I also like ${this.hobby} during my leisure.`;
  }
}
student.hobby = "hiking";

// console.log(student.sayBio());

// Principle 3
// code example for New Binding

function trainer(pokemon) {
  this.choice = 'I choose you!';
  this.pokemon = pokemon;
  this.speak = function() {
    console.log( this.pokemon + this.choice);
  };
}

const ash = new trainer ('Pikachu! ');
const gary = new trainer ('Vulpix! ');

ash.speak();
gary.speak();


// Principle 4
// code example for Explicit Binding


ash.speak.call(gary); 
// gary.speak.apply(ash);
