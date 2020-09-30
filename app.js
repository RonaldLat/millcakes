let nav =()=>{
    let burger = document.querySelector('.burger')
    let links = document.querySelector('.list-links')

    burger.addEventListener('click',()=>{
        links.classList.toggle('list-active')
    })
}
nav();