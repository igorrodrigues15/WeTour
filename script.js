
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
  }

  

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  document.getElementById("alertBox").style.display='none';
  var concei = document.getElementsById("conciergerieValue")
  

  var myModal2 = document.getElementById("myModal2");

  function checkServices() {
var textinputs = document.querySelectorAll('input[type=checkbox]'); 
var empty = [].filter.call( textinputs, function( el ) {
     return !el.checked
  });
  
  if (textinputs.length == empty.length) {
    document.getElementById("alertBox").style.display='block';
  } else {document.getElementById("alertBox").style.display='none';
  window.location.href = "validation.html";
        }
      return false;
}

(() => {
    'use strict'
  
   
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  

// Add item to cart
function addItemToCart(item) {
  cartItems.push(item);
  showCart();
}

// Remove item from cart
function removeItemFromCart(item) {
  cartItems.splice(cartItems.indexOf(item), 1);
  showCart();
}

// Show items in cart
function showCart() {
  cart.innerHTML = "";
  if (cartItems.length == 0) {
    cart.innerHTML = "Your cart is empty.";
  } else {
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemElement = document.createElement("div");
      itemElement.innerHTML = item.name + " - $" + item.price + " <button onclick='removeItemFromCart(" + JSON.stringify(item) + ")'>Remove</button>";
      cart.appendChild(itemElement);
    }
  }
}

// Initialize items
const items = [
  {name: "Item 1", price: 10.00},
  {name: "Item 2", price: 20.00},
  {name: "Item 3", price: 30.00}
];

// Display items
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const itemElement = document.createElement("div");
  itemElement.innerHTML = item.name + " - $" + item.price + " <button onclick='addItemToCart(" + JSON.stringify(item) + ")'>Add to Cart</button>";
  itemsContainer.appendChild(itemElement);
}


