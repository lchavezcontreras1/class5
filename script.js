$(document).ready(function () {
    $("form").submit(registerForCamp);
});
$(document).ready(function () {
    $("form").submit(placeOrder);
    $("input[name=soap]").change(updateButtonText);
    //button has to be withing the form to work
});

function registerForCamp(e) {
    //get state value from input
    let state = $("input#state").val();

    //get city value from input
    let city = $("input#city").val();

    //get create an output message string
    let outputMessage = `You will attend camp in ${city}, ${state}.`;

    //put message in confirmation
    $("p#confirmation").text(outputMessage);

    //stop form from submitting and reloading itself
    e.preventDefault();
}
//great for shopping cart
function updateButtonText(){
    let checkedBoxes = $("input[name=soap]:checked");
    let numCheckedBoxes = checkedBoxes.length;
    $("span#quantity").text(numCheckedBoxes);
}
function placeOrder(event) {

    //stop form from submitting and reloading itself
    event.preventDefault();

    // ask jquery to find how many soap boxes were checked
    let checkedBoxes = $("input[name=soap]:checked");

    // find out subtotal of all checked boxes
    let total = 0;
    checkedBoxes.each(function () {
        //find the data price value and add to total
        total += $(this).data("price");
    });

    // update the order summary with subtotal
    $("span#subtotal").text(total.toFixed(2));

    // create a variable to hold the soap descriptions
    let descriptions = "";

    // find the values of all checked boxes
    checkedBoxes.each(function (){
        // find the .val() and add/concatenate to description
        descriptions += $(this).val()+" ";
    });

    //update the order summary with the names
    $("span#desc").text(descriptions);

    let shippingCost = $("input[name=shipping]:checked").data("shipping-fee");

    $("span#shipping").text(shippingCost.toFixed(2));
    //toFixed always last

    let grandTotal= total + shippingCost;

    $("span#grandtotal").text(grandTotal.toFixed(2));
}

//$("input[name=soap]:checked");
/*checkedBoxes.each(function(){
    total+= $(this).data("price");
}) the data-price of this current checkbox is added to the total and changing the total */