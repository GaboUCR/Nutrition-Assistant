let T = {grasa:0, proteina:1, carnes_semi_magras:2, lacteo:3, vegetales:4, frutas:5, azucares:6, carnes_magras:7, almidones:8, leguminosas:9}
//meals = [{name: "meal1", foods: [food1, food2, ...]},{name:"meal2", foods:[food1, food2 ...]}, ...] 
//where food = {type:str, quantity:float}  
let meals = [{name:"Merienda 1", foods: [{type:T.frutas, quantity: 1}, {type:T.almidones, quantity:1}, {type:T.lacteo, quantity:1}, {type:T.grasa, quantity:1}]}, {name:"desayuno 11am", foods: [{type:T.almidones, quantity:2}, {type:T.carnes_semi_magras, quantity:3}, {type:T.grasa, quantity:2}, {type:T.leguminosas, quantity:1}]}, {name:"merienda 2", foods:[{type:T.lacteo, quantity:1}, {type:T.frutas, quantity:1}, {type:T.almidones, quantity:1}, {type:T.grasa, quantity:1}]}];
// edibles = [{name:str, type:int, unit:str, amount:int}...]
let edibles = [{name:"chorizo", type:T.grasa, unit:"kg", amount:2}, {name:"pan", type:T.carbohidrato, unit:"kg", amount:2}, {name:"queque", type:T.carbohidrato, unit:"kg", amount:2}, {name:"mas chorizo", type:T.grasa, unit:"kg", amount:2}]

async function LoadMeals () {
  const requestOptions = { method: 'GET' }
  let meals = await fetch('/meals', requestOptions)
  return meals 
}

function LoadInterface (meals, edibles) { 
  let list = document.getElementById("index");
  
  for (let i=0; i < meals.length; i++) {
    let meal_name = document.createElement("div") 
    meal_name.innerText = meals[i].name
    meal_name.classList.add("mv2", "tc", "f4")
    list.appendChild(meal_name)

    for (let j=0; j < meals[i].foods.length; j++) {
      let container = document.createElement("div")
      container.classList.add("flex")
      let toggle_foods = document.createElement("select")
      toggle_foods.classList.add("fl", "w-50", "pa-2")
      //this loops calculates the same thing a thousand times :(
      for (let k=0; k < edibles.length; k++) {

        if (edibles[k].type == meals[i].foods[j].type) {
          let new_food = document.createElement("option")
          new_food.setAttribute("value", edibles[k].name)
          new_food.innerText = (meals[i].foods[j].quantity * edibles[k].amount).toString()+" "+edibles[k].unit+" de " +edibles[k].name
          toggle_foods.appendChild(new_food)
        }
      }

      let food = document.createElement("div")
      food.classList.add("fl", "w-50", "pa-2", "f4")
      food.innerText = meals[i].foods[j].quantity.toString() +" " +get_food_str(meals[i].foods[j].type)
      container.appendChild(food)
      container.appendChild(toggle_foods)
      list.appendChild(container)
    }
  }
}

function get_food_str (food_type) {
  
  if (food_type == T.carbohidrato) {
    return "carbohidrato"
  }

  if (food_type == T.proteina) {
    return "proteína"
  }

  if (food_type == T.grasa) {
    return "grasa"
  }

  if (food_type == T.lacteo) {
    return "lacteo"
  }

  if (food_type == T.vegetales) {
    return "vegetales"
  }

  if (food_type == T.frutas) {
    return "frutas"
  }

  if (food_type == T.azucares) {
    return "azúcares"
  }

  if (food_type == T.carnes_magras) {
    return "carnes magras"
  }

  if (food_type == T.carnes_semi_magras) {
    return "carnes semi magras"
  }

  if (food_type == T.almidones) {
    return "almidones"
  }

  if (food_type == T.leguminosas) {
    return "leguminosas"
  }
}

function LoadData () {
  LoadMeals()
}