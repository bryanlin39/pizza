// Business Logic
var totalPrice = 0;
var pizzaCounter = 0;

function Pizza(number, size, standard, premium) {
  this.number = number;
  this.size = size;
  this.standard = standard;
  this.premium = premium;
}

Pizza.prototype.pizzaPrice = function(size, standard, premium) {
  var sizePrice = 1;
  var pizzaPrice = 6;
  if (size === "Medium") {
    sizePrice *= 1.5;
  } else if (size === "Large") {
    sizePrice *= 2;
  } else if (size === "Party") {
    sizePrice *= 2.5;
  }
  pizzaPrice = (pizzaPrice + (standard.length*2) + (premium.length*3)) * sizePrice;
  totalPrice += pizzaPrice;
  return pizzaPrice;
}

// User Interface Logic
$(document).ready(function() {

  // on-click for build button
  $("#build").click(function(event) {
    event.preventDefault();

    pizzaCounter += 1;

    // assigning user inputs into variables
    var inputtedSize = $("#size").val();
    var inputtedStandardToppings = [];
    var inputtedPremiumToppings = [];
    $("input:checkbox[name=standard]:checked").each(function() {
      standardTopping = $(this).val();
      inputtedStandardToppings.push(standardTopping);
    });
    $("input:checkbox[name=premium]:checked").each(function() {
      premiumTopping = $(this).val();
      inputtedPremiumToppings.push(premiumTopping);
    });

    // call Pizza constructor and price prototype
    var newPizza = new Pizza(pizzaCounter, inputtedSize, inputtedStandardToppings, inputtedPremiumToppings);

    var pizzaPrice = newPizza.pizzaPrice(newPizza.size, newPizza.standard, newPizza.premium);

    console.log(totalPrice, pizzaPrice);

    // append pizzas list and show pizza details
    $("#oven").append("<li><span class='pizza'>Pizza # " + newPizza.number + ", " + newPizza.size + "</span></li>");
    $(".pizza").last().click(function() {
      $("#pizza-details").show();
      $("#pizza-number").last().text(newPizza.number);
      $("#pizza-size").last().text(newPizza.size);
      $("#pizza-standard-toppings").last().text(newPizza.standard);
      $("#pizza-premium-toppings").last().text(newPizza.premium);
    });

    $("#pizza-selections").trigger("reset");
    // end build button click
  });



});
