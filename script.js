// all recipes

var allRecipes = [ 


{ name:   "Spaghetti and Meatballs",
  nid:    "spaghetti", 
  ing:{   tomato: 1,
          pasta: 1,
          sauce: 1,
          groundBeef: 1
      },
  pic:    "assets/hero1.jpeg",
  inList: false,
},


{ name:   "Cheeseburgers",
  nid:    "burger", 
  ing: {  groundBeef: 1,
          hamburgerBuns: 4,
          cheese: 1
       },
  pic:    "assets/hero2.jpeg",
  inList: false,
},

{ name:   "Spinach Salad",
  nid:    "salad",
  ing:  {  spinach: 1,
           chicken: 1,
           tomato:  1
        },
  pic:    "assets/hero3.jpeg",
  inList: false,
}
]


var selectedRecipes = [];
var totalIngredients = {};


// loop through each object, push key/value pairs to totalIngredients
var findTotalIngredients = function(selectedRecipes) {
  for(var i = 0; i < selectedRecipes.length; i++) {
    var currentItem = selectedRecipes[i] 
    for (var j = 0; j < allRecipes.length; j++) {
      var currentMeal = allRecipes[j]
      if(j === currentItem) {
        // add ingredients to totalIngredients
        for (var key in currentMeal.ing){
          if(totalIngredients.hasOwnProperty(key)) {
            totalIngredients[key]+= currentMeal.ing[key]
          } else { 
            totalIngredients[key] = currentMeal.ing[key]
        // increment current item
          }
        }
      }
    }
  }
}

var showTotalIngredients = $("#get-all")


// function to display all recipes to the DOM
// (ew) take all recipes array and display to the DOM with functionality to onClick
var displayRecipes = function(array) {

  var len = array.length;
  var counter = 0;
  var tempName;

  while (counter < len) {

  //adds name to DOM and gives it an ID
  $(".display-all").append("<div class='col-md-4' id='"+counter+"'>"+array[counter].name+"</div>");
    console.log(array[counter].name);
  //adds picture to that name via ID
  $("#"+counter+"").append("<img class= 'img-responsive recipe-pic' id='"+array[counter].nid+"'src='"+array[counter].pic+"'>");
  //document.getElementById(counter).addEventListener("click", isSelected, false);
  
  counter++;
  }

};


//arrive on page and view all recipes (ew - figure out how to display all recipes in a way that user can click on any/all)
//user clicks on a recipe (kt - figure out how to add that recipe to the selected recipes object)
//backend - calculate total ingredients from selected recipes (kt - loop)
//display to DOM - (ew)

displayRecipes(allRecipes);

//adds hover effect for images

/*function isSelected(elementID) {
  if ()
  console.log('working!');
}*/

// register button clicked, add object to selectedRecipes
$(".recipe-pic").mousedown(function(){
      $(this).css("-webkit-filter", "grayscale(0.8) opacity(0.4)").css("filter", "grayscale(0.8) opacity(0.4)").css("-webkit-transition", ".3s ease-in-out").css("transition", ".3s ease-in-out");
      var currentRecipe = event.target.parentNode.id;
      if (selectedRecipes.includes(parseInt(currentRecipe)) === false) {
        selectedRecipes.push(parseInt(currentRecipe));
        }
      else {

      }
      console.log(currentRecipe);
      console.log(selectedRecipes);
});


$("#get-all").mousedown(function(){
    findTotalIngredients(selectedRecipes);
    console.log(totalIngredients);

    for (var key in totalIngredients) {
      $(".showTotal").append("<li class='list-group-item'>"+key+": "+totalIngredients[key]+"</li>");
    }
});


