// cartValue["dataset"].cards 
let num = 1;
const add =  `
    <div class="container">
      <div class="container-left">
        <img src="./assets/images/image-product-${num}.jpg">
        <p> Autumn Limited Edition.....</p>
      </div>
      <img src="./assets/images/icon-delete.svg">
    </div>
  `


const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const itemsNumber = document.querySelector('#value')
const btnAdd = document.querySelector('#btnAdd')
const cartValue = document.querySelector('.cartValue')
const cart = document.querySelector('#cart')
const dd = document.querySelector('[data-cards="0"]')
let products = {}
products.productsOrdered = 5;


plus.addEventListener('click', () => {
  products.productsOrdered++
  itemsNumber.innerHTML = products.productsOrdered;
  cartValue.innerHTML = `<h3>plus is clicked</h3>`
}
)
minus.addEventListener('click', () => {
  if (products.productsOrdered) products.productsOrdered--
  
  itemsNumber.innerHTML = products.productsOrdered;
  cartValue.innerHTML = `<h3>minus is clicked</h3>`
}
)

btnAdd.addEventListener('click', () => {
  dd["dataset"].cards  = products.productsOrdered
  cartValue.innerHTML = add
})





// aside part
const aside = document.getElementById('aside');
const open = document.getElementById('open');
const close = document.getElementById('close');
open.addEventListener('click', () => {
  aside.style.display = 'flex';
  console.log(aside)
}
)
close.addEventListener('click', () => {
  aside.style.display = 'none'
  console.log(close)
}
)
// aside part

// cart part
const openCart = document.querySelector('.openCart')
openCart.addEventListener('click', () => {
  if (  cart.style.display === 'none') {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none'
  }
})
