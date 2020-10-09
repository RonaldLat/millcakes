let nav = () => {
  let burger = document.querySelector(".burger");
  let linksLi = document.querySelectorAll(".links-li  li");
  let links = document.querySelector(".list-links");

  burger.addEventListener("click", () => {
    links.classList.toggle("list-active");
  });

  //animate
  burger.addEventListener("click", () => {
    // nav.classList.toggle('nav-active');

    // Animate Links
    linksLi.forEach((link, index) => {
      // we use index and divide it by 7 to animate each menu item individually at different instances or delays

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1.5s ease  forwards ${
          index / 7 + 0.3
        }s `;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");

    //deactivating body scroll
    // body.scrol

    burger.classList.toggle("burger-active");
    burger.classList.toggle("burger-line");
    // logoBurger.classList.toggle("logo-burger");
    // bb.classList.toggle("scroll-toggle");
    // document.body.style.overflow= 'hidden';

    // burger.addEventListener('click', () =>{
    //     document.body.style.overflow= 'scroll';
    // })
  });
};

// request.open('GET', "https://ron10-7b692.firebaseio.com/.json", true);

//load a new product card on the fly


//products animation
let anime = () => {
  window.addEventListener("load", () => {
    let g = document.querySelectorAll(".product-card");

    console.log(g);
    g.forEach((h) => {
      // h.style.transform = 'translateY(50%)'
      // console.log(h);
    });
  });
};

let shoppingCart = () => {
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", cartReady);
  } else {
    cartReady();
  }

  function cartReady() {
    let removeItemsBtns = document.querySelectorAll(".remove-btn");
    // console.log(removeItemsBtns)
    for (let i = 0; i < removeItemsBtns.length; i++) {
      let button = removeItemsBtns[i];
      button.addEventListener("click", removeCartItem);
    }

    let quantityInput = document.querySelectorAll(".cart-quantity-input");
    for (let i = 0; i < quantityInput.length; i++) {
      let input = quantityInput[i];
      input.addEventListener("change", quantityChanged);
    }
    let addToCartButtons = document.querySelectorAll(".product-cta");
    for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i];
      // console.log(addToCartButtons);
      button.addEventListener("click", addToCartClicked);
    }

    let purchaseBtn = document.querySelector('.purchase-btn button');
    purchaseBtn.addEventListener('click', purchaseClicked)
  }
  //   document.addEventListener('DOMContentLoaded', logg)
  //   function logg (){

  //   }

  function purchaseClicked(){
    alert('Thank You for your purchase');
    let cartItems = document.querySelectorAll('.cart-items')[0];

    while (cartItems.hasChildNodes()){
      cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
  }

  function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }

  function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
    //   console.log(input.value)
  }

  function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.querySelector(".product-name").textContent;
    let price = shopItem.querySelector(".product-price").textContent;
    let imageSrc = shopItem.querySelector(".product-image img").src;
    addItemsToCart(title, price, imageSrc);
    console.log(title, price, imageSrc);
    updateCartTotal();
  }

  function addItemsToCart(title, price, imageSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add('cart-row')
    let cartItems = document.querySelector(".cart-items");
    let cartItemsNames = cartItems.querySelectorAll('.cart-item-title');
    for( let i = 0; i< cartItemsNames.length; i++){
      if( cartItemsNames[i].innerHTML == title){
        alert('This item is already added to the cart');
        return;
      } 
    }
    cartRowContents = `
    <div class="cart-item cart-column">
        <img src="${imageSrc}" height="100" width="100" alt="">
        <span class="cart-item-title">${title}</span>

    </div>
    <div class="cart-price cart-column">${price}</div>
    <div class="cart-quantity cart-column">
        <input type="number" value="1" class="cart-quantity-input">
        <button class="remove-btn" type="button">REMOVE</button>
    </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow)
    cartRow.querySelector('.remove-btn').addEventListener('click', removeCartItem)
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged)
  }

  //update cart total
  let updateCartTotal = () => {
    let cartItemsContainer = document.querySelector(".cart-items");
    let cartRows = cartItemsContainer.querySelectorAll(".cart-row");
    // console.log(cartRows[0])
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let priceElement = cartRow.querySelector(".cart-price");
      let quantityElement = cartRow.querySelector(".cart-quantity-input");
      let price = parseInt(priceElement.innerText.replace("Ksh.", ""));
      let quantity = parseFloat(quantityElement.value);
      //   console.log(price, quantity);
      total = total + price * quantity;
    }
    let cartCount =document.querySelector('.cart-count')
    cartCount.innerHTML= total
    // total = Math.round(total * 100) / 100;
    document.querySelector(".cart-total-value").textContent = total;
  };
  updateCartTotal();
};

let options ={
  threshold: .3
};
let reviews = document.querySelector('.reviews')
let observer = new IntersectionObserver((enteries, observer)=>{
  enteries.forEach(entry=>{
    
    // console.log(entry.target)
    if(entry.isIntersecting){
      reviews.style.transform='translateX(0)'
    }
  })
},options)
observer.observe(reviews)
// let moreBtn = document.querySelector('.more-cakes')
// moreBtn.addEventListener('click',()=>{
//     newProduct();
// })
// newProduct();
// anime();
setTimeout(() => shoppingCart(), 1000);
nav();
// loadProducts();
