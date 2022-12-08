// $('.like-btn').on('click', function() {
//   $(this).toggleClass('is-active');
// });
// $('.minus-btn').on('click', function(e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest('div').find('input');
//   var value = parseInt($input.val());

//   if (value >= 1) {
//       value = value - 1;
//   } else {
//       value = 0;
//   }

// $input.val(value);

// });

// $('.plus-btn').on('click', function(e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest('div').find('input');
//   var value = parseInt($input.val());

//   if (value < 100) {
//       value = value + 1;
//   } else {
//       value =100;
//   }

//   $input.val(value);}

let cart = {}
const mainCart = document.getElementById("cartWrap")
if(localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"))
}
let sum = 0
for(let id in cart) {
  let item = cart[id]
  // <li class="items odd">
          
  //     <div class="infoWrap"> 
  //         <div class="cartSection">
  //            <p class="itemNumber">#QUE-007544-002</p>
  //           <h3>Item Name 1</h3>
          
  //            <p> <input type="text"  class="qty" placeholder="3"/> x $5.00</p>
          
  //           <p class="stockStatus"> In Stock</p>
  //         </div>  
      
          
  //         <div class="prodTotal cartSection">
  //           <p>$15.00</p>
  //         </div>
  //               <div class="cartSection removeWrap">
  //            <a href="#" class="remove">x</a>
  //         </div>
  //       </div>
  //       </li>
  mainCart.innerHTML += `
  <li class="items odd">
  <div class="infoWrap"> 
	<div class="cartSection">
	  <h3>${item.title}</h3>
	
	   <p> ${item.qty} x ${item.price}</p>
	
	  <p class="stockStatus"> In Stock</p>
	</div>  

	
	<div class="prodTotal cartSection">
	  <p>₹${item.price * item.qty}</p>
	</div>
		  <div class="cartSection removeWrap">
      <i class="fa-sharp fa-solid fa-xmark remove"></i>
	</div>
  </div>
  </li>`
  sum += item.price * item.qty
  const button = document.getElementById("checkout")
  button.addEventListener("click",()=>{
  fetch('/create-checkout-session',{
      method:'POST',
      headers:{
          'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
          items : [
              {id : item.title, quantity:item.qty},
          ]
      })
  }).then(res=>{
      if (res.ok) return res.json()

      return res.json().then(json => Promise.reject(json))

  }).then(({url}) => {
      window.location  = url
  }).catch(e =>{
      console.log(e.error)
  })
  })
}
const value = document.getElementById("value")
value.innerHTML = `₹${sum}`

	// <div class="infoWrap"> 
	// <div class="cartSection">
	// <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
	//   <h3>Item Name 1</h3>
	
	//    <p> <input type="text"  class="qty" placeholder="1"/> x $5.00</p>
	
	//   <p class="stockStatus"> In Stock</p>
	// </div>  

	
	// <div class="prodTotal cartSection">
	//   <p>$15.00</p>
	// </div>
	// 	  <div class="cartSection removeWrap">
	//    <a href="#" class="remove">x</a>
	// </div>
  // </div>