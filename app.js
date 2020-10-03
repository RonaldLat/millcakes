let nav =()=>{
    let burger = document.querySelector('.burger')
    let linksLi = document.querySelectorAll('.links-li  li')
    let links = document.querySelector('.list-links')

    burger.addEventListener('click',()=>{
        links.classList.toggle('list-active')
    })

    //animate
    burger.addEventListener('click', () => {

        // nav.classList.toggle('nav-active');

        // Animate Links
        linksLi.forEach((link, index) => {
            // we use index and divide it by 7 to animate each menu item individually at different instances or delays

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1.5s ease  forwards ${index  / 7 + 0.3}s `;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');


        //deactivating body scroll
        // body.scrol



        burger.classList.toggle('burger-active');
        burger.classList.toggle('burger-line');
        logoBurger.classList.toggle('logo-burger');
        bb.classList.toggle('scroll-toggle');
        // document.body.style.overflow= 'hidden';

        // burger.addEventListener('click', () =>{
        //     document.body.style.overflow= 'scroll';
        // })
    });
}

    // request.open('GET', "https://ron10-7b692.firebaseio.com/.json", true);

//load a new product card on the fly
let newProduct =()=>{
    let moreBtn = document.querySelector('.more-cakes');
    // let productsContainer = document.querySelector('.products-container')
    // let productCard = document.createElement('div')
    // let productName = document.createElement('div')

    // productCard = productCard.setAttribute("class", "product-card")
    // productCard.classList.add('product-card')

    //append child
    // productsContainer.appendChild(productCard)

    // moreBtn.addEventListener('click', ()=>{
        let request = new XMLHttpRequest();
        request.onreadystatechange = ()=>{
            if(request.readyState == 4 && request.status ==200){
 
            }
    
        }
        request.open('GET', "cakes.json", true);
        request.responseType = 'json'
        request.send();
        
        request.onload = function(){
            let productPrice = document.createElement('div')

            productPrice.classList.add('product-price')

            // productCard.appendChild(productName);
            // productCard.appendChild(productPrice);
            // console.log(productsContainer)


            const cakes = request.response;
            populateNames(cakes);
            // showCakes(cakes);
        }
        let productsContainer = document.querySelector('.products-container');

        function populateNames(cakes){



            // console.log(cakes.length)
            for( let i =0; i< cakes.length; i++){
                let productCard = document.createElement('div');
                let productPrice = document.createElement('div');
                let productImageDiv = document.createElement('div');
                let productImage = document.createElement('img');
                let cta = document.createElement('div');
                let ctaBtn = document.createElement('button');

                productImageDiv.classList.add('product-image');
                productCard.classList.add('product-card');
                productPrice.classList.add('product-price');

                productImage.setAttribute("src",`./images/${cakes[i].images[0].image}`)

                //call to action
                cta.classList.add('product-cta')
                ctaBtn.textContent= "Order Now"
                cta.appendChild(ctaBtn);

                productsContainer.appendChild(productCard);
                productImageDiv.appendChild(productImage)

                let productName = document.createElement('div')

                productName.textContent =cakes[i].flavor
                productPrice.textContent = cakes[i].price[0.5]

                productName.classList.add('product-name')
                productCard.appendChild(productImageDiv)
                productCard.appendChild(productName)
                productCard.appendChild(productPrice)
                productCard.appendChild(cta)


                // productName.textContent = this.flavor

                // console.log(cakes[i].images[i].image)
                // console.log(cakes[i].price[0.5])
                // console.log(cakes[0])
                // console.log(cakes[0])

            }
        }
    // })
};

//products animation
let anime = ()=>{
window.addEventListener('load', ()=>{
    let g = document.querySelectorAll('.product-card')

    console.log(g)
    g.forEach(h=>{
        // h.style.transform = 'translateY(50%)'
        // console.log(h);

    })
})
}

// let moreBtn = document.querySelector('.more-cakes')
// moreBtn.addEventListener('click',()=>{
//     newProduct();
// })
newProduct();
anime();
nav();
// loadProducts();
