
var crust="";
var sauces="";
var cheese="";
var topping="";

function pizzaOven(crustType, sauceType, cheeseType,toppingsType){

    var crustTypeList = ["Stuffed Crust","Cracker Crust","Flat Bread Crust","Thin Crust","Cheese Crust Pizza","Thick Crust Pizza","Wrapping It Up"];
    var sauceTypeList = ["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"];
    var cheesesList = ["Mozzarella Cheese","Provolone Cheese","Cheddar Cheese","Parmesan Cheese","Gouda","Goat Cheese","Gruyere","Ricotta"];
    var toppingsList = ["Pepperoni","Sausage","Mushrooms","Bacon","Onions","Extra Cheese","Peppers","Chicken"];

if (crustType == 'random') {
  crustType = crustTypeList[Math.floor(Math.random() * crustTypeList.length)]
}
    if (sauceType == 'random') {
  sauceType = sauceTypeList[Math.floor(Math.random() * sauceTypeList.length)]
}

    if (cheeseType == 'random') {
  cheeseType = cheesesList[Math.floor(Math.random() * cheesesList.length)]
}
if (toppingsType == 'random') {
  toppingsType = toppingsList[Math.floor(Math.random() * toppingsList.length)]
}

    var pizza = {
        // crust: crustTypeList[crustType],
        crust: crustType,
        sauces: sauceType,
        cheese: cheeseType,
        topping: toppingsType
    };

    console.log ("Your Pizza:", pizza);

}

//Pizza #1
console.log("Pizza #1")
pizzaOven ("deep dish", "traditional", ["mozzarella","pepperoni"]);

//Pizza #2
console.log("Pizza #2")
pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);

//Pizza #3
console.log("Pizza #3")
pizzaOven ("Cracker Crust", "Garlic Ranch Sauce", ["Parmesan Cheese","Gouda","Goat Cheese"], ["Extra Cheese","Peppers","Chicken"]);

//Pizza #4
console.log("Pizza #4")
pizzaOven(["Stuffed Crust","Cracker Crust"], ["White Garlic Sauce","Garlic Ranch Sauce"], ["Provolone Cheese","Cheddar Cheese"],"Extra Cheese")


// random pizza
console.log("Random Pizza with singe ingredients each")
pizzaOven('random', 'random', 'random','random');
