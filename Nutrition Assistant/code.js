function LoadMeals () {
  //meals = [{name: "meal1", foods: [food1, food2, ...]},{name:"meal2", foods:[food1, food2 ...]}, ...] where food = {type:str, quantity:int}
  let meals = [{name:"desayuno", foods: [{type:"azucar", quantity: 5}]}, {name:"desayuno", foods: [{type:"azucar", quantity: 5}]}];
  let list = document.getElementById("index");
    
  for (let i=0; i < meals.length; i++) {
    let meal_name = document.createElement("li") 
    meal_name.innerText = meals[i].name
    list.appendChild(meal_name)

    for (let j=0; j < meals[i].foods.length; j++) {
      let food = document.createElement("li")
      food.innerText = meals[i].foods[j].quantity.toString() +" " + meals[i].foods[j].type
      list.appendChild(food)
    }
  }
}

function LoadData () {
  LoadMeals()
    
}