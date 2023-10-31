



/**
* @description: Function to check if the product is already in the shopping cart
* @param {Array} cartProducts : Array of products in the shopping cart
* @returns {Number} total: Total price of the products in the shopping cart
*/
export const totalPrice = (cartProducts) => {
    let total = 0;
    cartProducts.forEach(product => {
        total += product.price;
    });
    return total;
}