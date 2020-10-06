// let newProduct = () => {

//   let moreBtn = document.querySelector(".more-cakes button");
//   // let productsContainer = document.querySelector('.products-container')
//   // let productCard = document.createElement('div')
//   // let productName = document.createElement('div')

//   // productCard = productCard.setAttribute("class", "product-card")
//   // productCard.classList.add('product-card')

//   //append child
//   // productsContainer.appendChild(productCard)

//   moreBtn.addEventListener('click', ()=>{
//   let request = new XMLHttpRequest();
//   request.onreadystatechange = () => {
//     if (request.readyState == 4 && request.status == 200) {
//     }
//   };
//   request.open("GET", "cakes.json", true);
//   request.responseType = "json";
//   request.send();

//   request.onload = function () {
//     let productPrice = document.createElement("div");

//     productPrice.classList.add("product-price");

//     // productCard.appendChild(productName);
//     // productCard.appendChild(productPrice);
//     // console.log(productsContainer)

//     const cakes = request.response;
//     populateNames(cakes);
//     // showCakes(cakes);
//   };
//   let productsContainer = document.querySelector(".products-container");

//   function populateNames(cakes) {
//     // console.log(cakes.length)
//     for (let i = 0; i < 4; i++) {
//       let productCard = document.createElement("div");
//       let productPrice = document.createElement("div");
//       let productImageDiv = document.createElement("div");
//       let productImage = document.createElement("img");
//       let cta = document.createElement("div");
//       let ctaBtn = document.createElement("button");

//       productImageDiv.classList.add("product-image");
//       productCard.classList.add("product-card");
//       productPrice.classList.add("product-price");
//       ctaBtn.classList.add("add-to-cart-btn");

//       productImage.setAttribute("src", `./images/${cakes[i].images[0].image}`);

//       //call to action
//       cta.classList.add("product-cta");
//       ctaBtn.textContent = "Order Now";
//       cta.appendChild(ctaBtn);

//       productsContainer.appendChild(productCard);
//       productImageDiv.appendChild(productImage);

//       let productName = document.createElement("div");

//       productName.textContent = cakes[i].flavor;
//       productPrice.textContent = cakes[i].price[0.5];

//       productName.classList.add("product-name");
//       productCard.appendChild(productImageDiv);
//       productCard.appendChild(productName);
//       productCard.appendChild(productPrice);
//       productCard.appendChild(cta);

//       // productName.textContent = this.flavor

//       // console.log(cakes[i].images[i].image)
//       // console.log(cakes[i].price[0.5])
//       // console.log(cakes[0])
//       //   console.log(cakes[0])
//     }
//   }
//   })
// };

//promises
// let p = new Promise((resolve, reject)=>{
//   let a = 1+ 1;
//   if (a==21){
//     resolve('succes')
//   }else{
//     reject('failed')
//   }
// });

// p.then((m)=>{
//   console.log(`This is a resolved promise is ${m}`)
// }).catch((m)=>{
//   console.log(`This is a rejected promise has ${m}`)
// })

// fetch api
// fetch('cakes.json')
// // .catch(ee =>console.log(ee))
// .then(res => res.json())
// .then(cakes =>console.log(cakes))
// .catch(error => console.error(error))

//fetch with async await
// async function loadCakes(){
//   let response = await fetch('cakes.json');
//   let cakes = await response.json()
//   console.log(cakes)
// }

// document.addEventListener('DOMContentLoaded', async () =>{
//   let users =[]
//   try{
//     let data = await loadCakes();
//   }catch(e){
//     console.log('Error')
//   }
// })

let loadProducts =(x,y)=>{
  // let x =0;
  // let y =4
  fetch("cakes.json")
  .then((resoponse) => resoponse.json())
  .then((cakes) => initialCakes(cakes, x, y));

let initialCakes = (cakes, x,y) => {

  for (let i = x; i < y; i++) {

    let productImage = cakes[i].images[0].image
    let productName = cakes[i].flavor
    let productPrice = cakes[i].price[0.5]

    let productsContainer = document.querySelector(".products-container");
    let productCard = document.createElement('div')

    let productCardContent = `
    <div class = "product-card">

    <div class = "product-image">
    <img src = "./images/${productImage}">
    </div>

    <div class = "product-name">
    ${productName}
    </div>
    <div class = "product-price">
    ${productPrice}
    </div>
    <div class = "product-cta">
    <button class = "add-to-cart-btn"> Order Now </button>
    </div>
    
    </div>

`

     productCard.innerHTML = productCardContent;
     productsContainer.appendChild(productCard)

  }

  // console.log(cakes)
};

}
let moreBtn = document.querySelector('.more-cakes button')
document.addEventListener('DOMContentLoaded', loadProducts(0,4))

let y= 4;
let x = 0;

function moreCakes(){

  let moreBtn = document.querySelector('.more-cakes button')

  if(y<9){

    y +=4
    x +=4
    loadProducts( x,y);

setTimeout(() => shoppingCart(), 1000);


  console.log(x,y)
  }else{
    moreBtn.style.display= 'none'

  }

}
moreBtn.addEventListener('click',moreCakes)

