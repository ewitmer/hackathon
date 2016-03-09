
// recipe object
var spaghettiMeatballs = {
  picture: 1,
  pasta: 1,
  sauce: 1,
  groundBeef: 1
};

// recipe object
var cheeseBurgers = {
  picture : 1,
  groundBeef: 1,
  hamburgerBuns: 4,
  cheese: 1
};

// recipe object
var spinachSalad = {
  picture: 1,
  spinach: 1,
  chicken: 1,
  tomato:  1
};

// all recipes
var allRecipes = [spaghettiMeatballs, cheeseBurgers, spinachSalad];

// selected recipes
var selectedRecipes = [spaghettiMeatballs, cheeseBurgers];

// function to display all recipes to the DOM
var displayRecipes = function(array) {

  var len = array.length;
  var counter = 0;

  while (counter < len) {
    console.log(array[0]);
    counter++;
  }
};

displayRecipes(allRecipes);
