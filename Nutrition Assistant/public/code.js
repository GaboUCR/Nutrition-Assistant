import {meals, edibles} from "./assets/data.js"
let T = {grasa:0, proteina:1, carnes_semi_magras:2, lacteo:3, vegetales:4, frutas:5, azucares:6, carnes_magras:7, almidones:8, leguminosas:9}

function LoadInterface (meals, edibles) { 
  let list = document.getElementById("index");
  let local_storage = LoadLocalStorage()
  for (let i=0; i < meals.length; i++) {
    let meal_name = document.createElement("div") 
    meal_name.innerText = meals[i].name
    meal_name.classList.add("mv2", "tc", "f4")
    list.appendChild(meal_name)

    for (let j=0; j < meals[i].foods.length; j++) {
      let meal_id = meals[i].foods.id // @todo Clean up.
      let container = document.createElement("div")
      container.classList.add("flex")

      let toggle_foods = document.createElement("select")
      toggle_foods.addEventListener('change', (event) => {
        SetLocalStorage(event.target.value)
      })
      toggle_foods.classList.add("fl", "w-50", "pa-2")

      //this loops calculates the same thing a thousand times :(
      for (let k=0; k < edibles.length; k++) {
        
        if (edibles[k].type == meals[i].foods[j].type) {
          let edibles_id = meals[i].id.toString()+","+meals[i].foods[j].id.toString()+","+edibles[k].id.toString()

          if (is_first_element(edibles_id, local_storage)) {
            let new_food = document.createElement("option")
            new_food.setAttribute("value", edibles_id)
            new_food.setAttribute("selected", "")
            new_food.innerText = (meals[i].foods[j].quantity * edibles[k].amount).toString()+" "+edibles[k].unit+" de " +edibles[k].name
            toggle_foods.insertAdjacentElement('afterbegin', new_food)
            continue
          }

          let new_food = document.createElement("option")
          new_food.setAttribute("value", edibles_id)
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

async function LoadMeals () {
  const requestOptions = { method: 'GET' }
  var response = await fetch('/meals', requestOptions)
  var meals = await response.json()
  return meals
}

async function LoadEdibles () {
  const requestOptions = { method: 'GET' }
  let response = await fetch('/edibles', requestOptions)
  var edibles = await response.json()
  return edibles
}

// @todo This need a better name.
function is_first_element (element, local_storage) {
  for (let i=0; i<local_storage.length; i++) {
    if (local_storage[i] === element) {
      return true
    }
  }
  return false
}

function SetLocalStorage (value) {
  let local_storage = LoadLocalStorage()
  let meal_id = value.split(',')[0]
  let food_id = value.split(',')[1]
  let new_local_storage = ""
  let not_in = true

  if (local_storage.length === 0) {
    localStorage.setItem('cache', value+".")
    return true
  }

  for (let i=0; i<local_storage.length; i++) {
    let saved_meal_id = local_storage[i].split(',')[0]
    let saved_food_id = local_storage[i].split(',')[1]

    if (meal_id === saved_meal_id && food_id === saved_food_id) {
      new_local_storage += value+"."
      not_in = false
      continue
    }
    new_local_storage +=local_storage[i]+"."
  }

  if (not_in) {
    new_local_storage +=value+"."
  }
  localStorage.setItem('cache', new_local_storage)
  return true
}

function LoadLocalStorage () {
  if (localStorage.getItem('cache') === null) {
    return []
  }
  else {
    let cache = localStorage.getItem('cache').split('.')
    cache = cache.slice(0,cache.length-1)
    return cache
  }
}

function LoadData () {
  // let meals = await LoadMeals()
  // let edibles = await LoadEdibles()
  LoadInterface(meals.meals, edibles.edibles)
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

//main
LoadData()
//meals = [{name: "meal1", foods: [food1, food2, ...]},{name:"meal2", foods:[food1, food2 ...]}, ...] 
//where food = {type:str, quantity:float}  
// let meals = [{name:"Merienda 1", foods: [{type:T.frutas, quantity: 1}, {type:T.almidones, quantity:1}, {type:T.lacteo, quantity:1}, {type:T.grasa, quantity:1}]}, {name:"desayuno 11am", foods: [{type:T.almidones, quantity:2}, {type:T.carnes_semi_magras, quantity:3}, {type:T.grasa, quantity:2}, {type:T.leguminosas, quantity:1}]}, {name:"merienda 2", foods:[{type:T.lacteo, quantity:1}, {type:T.frutas, quantity:1}, {type:T.almidones, quantity:1}, {type:T.grasa, quantity:1}]}];
// // edibles = [{name:str, type:int, unit:str, amount:int}...]
// let edibles = [{name:"chorizo", type:T.grasa, unit:"kg", amount:2}, {name:"pan", type:T.carbohidrato, unit:"kg", amount:2}, {name:"queque", type:T.carbohidrato, unit:"kg", amount:2}, {name:"mas chorizo", type:T.grasa, unit:"kg", amount:2}]
