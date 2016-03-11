
// collection of recipies, using jQuery
var arc = [
  {
    name:"pizza",
    ingred:{
      flour: 1,
      egg: 2
    }
  },{
    name:"pasta",
    ingred:{
      flour: 3,
      egg: 0
    }
  }
];

var selected = []

function renderName(recipies){

  var index = 0;
  while(index < recipies.length){
  
    $("#recp-view").append("<h3>" recipies[index].name "</h3>").addClass("recips");
  
    $(".recips").addEventListener("click", namehere)
  
  
    index++;
  }  

}

fucntion onHerver(){
  // awehbra
  // lwdfjna; kdf
}


