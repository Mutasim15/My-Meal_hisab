const addProduct=()=>{
    const productField= document.getElementById('product_name');
    const quantityField= document.getElementById('quantity');
    const product= productField.value ;
    const quantity=quantityField.value ;
    productField.value ='';
    quantityField.value ='';
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity)
    console.log(product,quantity)


}

const displayProduct=(product,quantity)=>{
    const ul=document.getElementById('product_container');
    const li = document.createElement('li');
    li.innerHTML=`${product}: ${quantity}` 
    ul.appendChild(li);
   

}

const getStoredShoppingCart=()=>{
    let cart={}; 
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
       cart= JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage =(product,quantity)=>{
  const cart =getStoredShoppingCart();
  cart[product]=quantity;
  const cartStringified=JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified);
  console.log(cartStringified);
}

const displayProductFromLocalStorage =()=>{
const restore=getStoredShoppingCart();
// console.log(restore);
for(const product in restore){
    const quantity = restore[product];
    displayProduct(product ,quantity )
}

}

displayProductFromLocalStorage();