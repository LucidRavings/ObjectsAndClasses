
const person = {
    first: "Kevin",
    last: "Judd",
    age: 30,
}

console.log(person.first)
console.log(person['last'])

const meal = {
    appetizer: "chips & salsa",
    entree: "carne asada burrito",
    dessert: "cheesecake",
    drink: "strawberry lemonade",
}

const meal2 = {
    appetizer: "nachos",
    entree: "tacos",
    dessert: "chocolate cake",
    drink: "hot chocolate",
}

let newFav = "huckleberry lemonade"

meal.drink = newFav

let {appetizer, entree, drink} = meal
console.log(entree + " with " + drink)

//renamed and destructured meal
const {drink: drink2, appetizer: app2, dessert: des2, entree: delicious2} = meal2;

//loop over meal2
//if the key is out dessert, update the value to be cupcakes and print to console, else print the value.

//renamed key value, not the data value.
for(let key in meal2){
    if(key === "dessert"){
        meal2[key] = "cupcakes"
        console.log(meal2[key])
    }else{
        console.log(key)
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

  teams.teamSix = ["kyle", "noah", "greg", "yancy"]

  delete teams.teamFour

  console.log(teams)

  