// Business Logic
function Pizza(number, size, standard, premium) {
  this.number = number;
  this.size = size;
  this.standard = standard;
  this.premium = premium;
}

Pizza.prototype.pizzaPrice = function(standard, premium) {
  price += ((standard.length + premium.length) * sizePrice);
  return price;
}

// User Interface Logic
$(document).ready(function() {
  var price = 6;
  var pizzaCounter = 0;

  $("#build").click(function(event) {
    event.preventDefault();

    pizzaCounter += 1;

    // assigning user inputs into variables
    var pizzaNumber = "Pizza #" + pizzaCounter;
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

    // call Pizza constructor
    var newPizza = new Pizza(pizzaNumber, inputtedSize, inputtedStandardToppings, inputtedPremiumToppings);

    console.log(newPizza);

    // var newPizza = new Pizza(inputtedSize, inputtedStandard, inputtedPremium)

  });
});
