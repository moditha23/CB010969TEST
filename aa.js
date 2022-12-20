let viewFav = document.querySelector("#vFav");
let fav = document.querySelector(".fav");
let closeFav = document.querySelector("#close-fav");
let Cart = [];

//Open Favourite
viewFav.onclick = () =>{
    fav.classList.add('active');
}

//Close favourite
closeFav.onclick = () =>{
    fav.classList.remove('active');
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready()
}


function ready(){
    
    //remove favourite item
    var removeFavBtn = document.getElementsByClassName('fav-remove');
    for(var i = 0; i<removeFavBtn.length; i++){
        var button = removeFavBtn[i]
        button.addEventListener('click', removeFavItem)
    }

    //Change product quantity
    var quantityInputs = document.getElementsByClassName('fav-quantity')
    for(var i = 0; i<quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    //add to favourite
    var addFav = document.getElementsByClassName('add-fav');
    for(var i = 0; i<addFav.length; i++){
        var button = addFav[i];
        button.addEventListener('click', addFavClicked);
    }

    
    //Change product quantity
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0; i<quantityInputs.length; i++){
        var inputs = quantityInputs[i];
        inputs.addEventListener("change", cartQuantityChanged);
    }

    //add to Cart
    var addCart = document.getElementsByClassName('add-cart');
    for(var i = 0; i<addCart.length; i++){
        var buttonAC = addCart[i];
        buttonAC.addEventListener('click', addCartClicked);
    }

    //Buy button 
    var orderProduct = document.getElementById('orderBtn');
    orderProduct.addEventListener('click', orderProducts);

    //remove cart item
    var removeCartBtn = document.getElementsByClassName('cart-remove');
    for(var i = 0; i<removeCartBtn.length; i++){
        var button = removeCartBtn[i]
        button.addEventListener('click', removeCartItem)
    }

    
}


function removeFavItem(event){
    var btnClicked = event.target;
    btnClicked.parentElement.remove();
    updateTotal();
    Cart.push(title);
}


function quantityChanged(){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}


//Add to favourite
function addFavClicked(event){
    var button = event.target;
    var addProducts = button.parentElement;
    var title = addProducts.getElementsByClassName('product-title')[0].innerText;
    var price = addProducts.getElementsByClassName('price')[0].innerText;
    var productImg = addProducts.getElementsByClassName('product-img')[0].src;

    console.log(title, price, productImg);
    addProducttoFav(title, price, productImg);
    var favShopBox = document.createElement("div");
    favShopBox.classList.add('fav-box')

    localStorage.setItem("favourite", (`Product : ${title}, Price : ${price}, Image : ${productImg}`));
    updateTotal();
    
}

function updateTotal(){
    var favContent = document.getElementsByClassName('fav-content')[0];
    var favBoxes= favContent.getElementsByClassName('fav-box');
    var total = 0;

    for(var i = 0; i<favBoxes.length; i++){
        var favBox = favBoxes[i]
        var priceElement = favBox.getElementsByClassName('fav-price')[0];
        var quantityElement = favBox.getElementsByClassName('fav-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("fav-total-price")[0].innerText = "$" + total;
}


function addProducttoFav(title, price, productImg){
    var favShopBox = document.createElement("div");
    favShopBox.classList.add('fav-box')
    var favItem = document.getElementsByClassName('fav-content')[0];
    var favItemName = favItem.getElementsByClassName('fav-product-title');
    for (var i = 0; i<favItemName.length; i++){
        if(favItemName[i].innerText == title){
        alert("You have already added this item to Favourite");
        return;
        }
    }

    while(favItem.hasChildNodes()){
        favItem.removeChild(favItem.firstChild)
    }
    
    document.getElementsByClassName('fav-img').src = productImg;
    document.getElementsByClassName('fav-product-title').innerText = title;
    document.getElementsByClassName('fav-price').innerText = price;

    var favBoxContent = `
                    <img src="${productImg}" alt="wooden mask" class="fav-img">
                    <div class="detail-box">
                                <div class="fav-product-title">${title}</div>
                                <div class="fav-price">${price}</div>
                                <input type="number" value="1" min="0" class="fav-quantity">
                            </div>
                            <i class="bx bxs-trash-alt fav-remove"></i>`;
    

    favShopBox.innerHTML = favBoxContent;
    favItem.append(favShopBox);
    favShopBox.getElementsByClassName('fav-remove')[0].addEventListener('click', removeFavItem);
    favShopBox.getElementsByClassName('fav-quantity')[0].addEventListener('change', quantityChanged);
}

//update favourite Total



//Cart
let viewCart = document.querySelector("#cOrder");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open Cart
viewCart.onclick = () =>{
    cart.classList.add('active');
}

//Close Cart
closeCart.onclick = () =>{
    cart.classList.remove('active');
}

//Remove item from Cart
function removeCartItem(event){
    var bttnClicked = event.target;
    bttnClicked.parentElement.remove();
    updateCartTotal();
    Cart.push(title);
}


function cartQuantityChanged(){
    var inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0){
        inputs.value = 1;
    }
    updateCartTotal();
}

//Add to cart
function addCartClicked(event){
    var buttons = event.target;
    var addProductsC = buttons.parentElement;
    var title = addProductsC.getElementsByClassName('product-title')[0].innerText;
    var price = addProductsC.getElementsByClassName('price')[0].innerText;
    var productImg = addProductsC.getElementsByClassName('product-img')[0].src;

    console.log(title, price, productImg);
    addProducttoCart(title, price, productImg);
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')

    updateCartTotal();
    Cart.push(title);
}

function addProducttoCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    var cartItem = document.getElementsByClassName('cart-content')[0];
    var cartItemName = cartItem.getElementsByClassName('cart-product-title');
    for (var i = 0; i<cartItemName.length; i++){
        if(cartItemName[i].innerText == title){
        alert("Already added");
        return;
        }
    }

    var cartBoxContent = `
         <img src="${productImg}" alt="wooden mask" class="cart-img">
         <div class="cart-detail-box">
         <div class="cart-product-title">${title}</div>
         <div class="cart-price">${price}</div>
         <input type="number" value="1" min="0" class="cart-quantity">
         </div>
        <i class="bx bxs-trash-alt cart-remove"></i>`;
    

    cartShopBox.innerHTML = cartBoxContent;
    cartItem.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', cartQuantityChanged);
    
}

//update cart Total
function updateCartTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes= cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for(var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}

//Add favourite order to current order
var orderFav = document.getElementsByClassName('btn-order-fav');
    for(var i = 0; i<orderFav.length; i++){
        var button = orderFav[i]
        button.addEventListener('click', orderFavourite);
    }

function orderFavourite(){
    var title = document.getElementsByClassName('fav-product-title')[0].innerText;
    var price = document.getElementsByClassName('fav-price')[0].innerText;
    var productImg = document.getElementsByClassName('fav-img')[0].src;
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItem = document.getElementsByClassName('cart-content')[0];
    var cartItemName = cartItem.getElementsByClassName('cart-product-title');
    for (var i = 0; i<cartItemName.length; i++){
        if(cartItemName[i].innerText == title){
        alert("You have already added this item to Current order");
        return;
        }
    }

    var favItem = document.getElementsByClassName('fav-content')[0];

    while(favItem.hasChildNodes()){
        favItem.removeChild(favItem.firstChild);
        localStorage.getItem('favourite');
    }

    var cartBoxContent = `
<img src="${productImg}" alt="wooden mask" class="cart-img"><div class="cart-detail-box"><div class="cart-product-title">${title}</div><div class="cart-price">${price}</div><input type="number" value="1" min="0" class="cart-quantity"></div><i class="bx bxs-trash-alt cart-remove"></i>`;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItem.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', cartQuantityChanged);
    
    updateCartTotal();
    updateTotal()
    Cart.push(title);
}

var checkLoyal = document.getElementById('loyal');
checkLoyal.addEventListener('click', checkLoyalty)
points = 0;

function checkLoyalty(){
    if (Cart.length > 3){
        points = Cart.length * 20;
        localStorage.setItem('Loyalty points', points);
        alert(`${points} Earned` )
    }
    else{
        alert('0 loyalty points earned' ) 
    }
}

//Buy button
function orderProducts(){
    alert("Order Successfull");
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateCartTotal()
}
