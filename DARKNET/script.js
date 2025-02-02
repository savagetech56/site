let cartTotal = 0;

function addToCart(productName, productPrice) 
    // Add product to the cart array
    cart.push( name: productName, price: productPrice );
    cartCount++;
    cartTotal += productPrice;

    // Update the cart count and total price on the webpage
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-total").innerText = cartTotal;

    // Update the cart items list
    let cartItems = document.getElementById("cart-items");
    let cartItem = document.createElement("li");
    cartItem.innerText = `{productName} - 
    
{productPrice}`;
    cartItems.appendChild(cartItem);
}
