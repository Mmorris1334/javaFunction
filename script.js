// Create variables for the welcome message

var greeting = "[not initialized]";
var name = "[not initialized]";
var message = "[not initialized]";
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = "[not initialized]";
var tiles = "[not initialized]";
var tiles, subTotal, shipping, grandTotal;

function getGrandTotal() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting= "Howdy";
  name="Molly";
  message="please check your order:";
  sign="Montague House";
 welcome= greeting + name + message;
  getGrandTotal();
}

function setTextContentById(getId, setText) {
// Get the element that has an id of greeting
var el = document.getElementById(getId);
// Replace the content of that element with the personalized welcome message
el.textContent = setText;
}

(function() {
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", "$" + subTotal);
  setTextContentById("shipping", "$" + shipping);
  setTextContentById("grandTotal", "$" + grandTotal);
});
// Note: textContent does not work in IE8 or earlier - see explanation on website
