MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}
profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

function is_resource_suf(order_ingredients){
    // """ Returns true when order can be made, false if ingrdients are insufficient """
    for (item in order_ingredients){
        if (order_ingredients[item] >= resources[item]){
            alert("Sorry there is not enough" + item)
            return false
        }
    }
    return true
}
function process_coins(){
    // """ Returns the total calculated from coins inserted"""
    // alert("Please insert coins.")
    total = parseInt(prompt("Please insert coins.      " + "How many quarters?: ")) * 0.25;
    total += parseInt(prompt("How many dimes?: ")) * 0.1;
    total += parseInt(prompt("How many nickles?: ")) * 0.05;
    total += parseInt(prompt("How many pennies?: ")) * 0.01;
    return total
}

function is_transaction_successfull(money_recieved, drink_cost){
    // """Return true when the payment is accepted, or false is money is sufficient."""
    if (money_recieved >= drink_cost){
        change = Math.round(money_recieved - drink_cost)
        alert("Here is $" + change + " in change.")
        profit += drink_cost
        return true
    }
    else{
        alert("Sorry that's not enough money. Money refunded.")
        return false
    }
}

function make_coffee(drink_name, order_ingredients){
    // """Deduct the required ingerdients from resources"""
    for (item in order_ingredients){
        resources[item] -= order_ingredients[item]
    }
    alert("Here is your " + drink_name + " ☕")
}

is_on=true
while (is_on){
    choice = prompt("What would you like? (espresso/latte/cappuccino): ")
    if (choice =="off"){
        is_on = false
    }
    else if (choice== "report"){
        alert("Water: " + resources['water'] + "ml")
        alert("Milk: " + resources['milk'] + "ml")
        alert("Coffee: " + resources['coffee'] + "g")
        alert("Money: $" + profit )
    }
    else{
        drink= MENU[choice]
        if (is_resource_suf(drink['ingredients'])){
            payment = process_coins()
        
            if (is_transaction_successfull(payment, drink['cost'])){
                make_coffee(choice, drink['ingredients'])
            }
        }
    }
}









