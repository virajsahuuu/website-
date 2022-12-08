import products from "./Data.js";
const card = document.getElementById("food");

for (var i = 0; i < products.length; i++) {
	var cardItem = document.createElement('div');
	cardItem.className="product"
	cardItem.innerHTML = `
    <div class="w3-quarter">
    <img src=${products[i].image} alt=${products[i].name} style="width:23%">
    
    <h6>${products[i].name}</h6>
  <p class="price">₹${products[i].price}</p>
  <button type="button" 
  class="btn btn-default btn-sm cart-btn">
  
  <b> Add to Cart </b>
</button>
</p>
  </div>`
	console.log(cardItem.innerHTML);
	card.appendChild(cardItem);
}
const addToCartButtons = document.getElementsByClassName('cart-btn')
let count = 0;
	let sum = 0;
	let cart = {};

	i(localStorage.getItem("count")) {
		count = parseInt(localStorage.getItem("count"));
	}

	if (localStorage.getItem("sum")) {
		sum = parseInt(localStorage.getItem("sum"));
	}

	if (localStorage.getItem("cart")) {
		cart = JSON.parse(localStorage.getItem("cart"));
	}

for(let i=0; i < addToCartButtons.length; i++) {
addToCartButtons[i].addEventListener('click', (e) => add(e));
}

function add(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.name;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count++;
    sum += price;

    localStorage.setItem("cart", JSON.stringify(cart));
    // updateCart();
}

let loggedIn = false
if (localStorage.getItem("loggedIn")) {
	loggedIn = localStorage.getItem("loggedIn")
}
if(loggedIn) {
	const list = document.getElementById("login")
	list.innerHTML = `<i class="fa-solid fa-user"></i>`
}

// function updateCart() {
//     localStorage.setItem("sum", sum);
//     localStorage.setItem("count", count);
// }
