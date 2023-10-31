import React, { useContext } from 'react';
import { ShoppinCartContext } from '../../Context';
import { FiX } from 'react-icons/fi';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils'; 
import { Link } from 'react-router-dom';

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCartContext);


  /* para borrar cada uno de los productos */
  const handleDeleteProduct = (id) => {
    // Filtra los productos para eliminar solo el producto con el ID correspondiente
    const updatedCartProducts = context.cartProducts.filter((product) => product.id !== id);
    // Actualiza el estado solo con los productos restantes
    context.setCartProducts(updatedCartProducts);
    // Actualiza el contador
    context.setCount(context.count - 1);
  
  }

  const handleCheckout = () => {
    /* crea un objeto con los productos del carrito, el total, la fecha y el id */
    const orderToAdd = {
      products: context.cartProducts,
      total: totalPrice(context.cartProducts),
      date: new Date().toLocaleDateString(),
      id: context.order.length + 1
    }
    /* actualiza el estado con el pedido */
    context.setOrder([...context.order, orderToAdd]);
    /* actualiza el estado con los productos del carrito */
    context.setCartProducts([]);
    context.setCount(0);
    context.handleCloseCheckoutSideMenu();
  }

  
  

  return (
    <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg h-[calc(100vh-100px)] w-1/5 top-18 z-10">
      <h1 className='text-center text-2xl font-bold text-gray-800 m-4 mt-10'>My Order</h1>
      <div className="flex justify-between items-center p-4 mb-6">
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 hover:bg-blue-600"
          onClick={() => context.handleCloseCheckoutSideMenu()}
        >
          <FiX />
        </button>
      </div>

        <div className="flex flex-col justify-between items-center overflow-y-auto">
          {context.cartProducts.length === 0 ? (
            <p className="text-gray-800 text-center text-sm font-semibold">
              No products added
            </p>
          ) : (

            context.cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))
          )}
        </div>
        <div className="flex items-center p-4 mb-6 w-full">
          { context.cartProducts.length === 0 
            ? (null
              )
            : (
              <div className=" items-center p-4 mb-6 w-full flex justify-between">
                 <p className="text-gray-800 text-left text-md font-bold mr-2">
                    TOTAL
                  </p>
                  <p className="text-gray-800 text-left font-semibold text-2xl">
                    ${totalPrice(context.cartProducts)}
                  </p>
              </div>
              )
          }
        </div>

        <div className="flex justify-between items-center p-4 flex-1">
          {context.cartProducts.length === 0 
            ? (null
              ) 
            : (
              <Link to="/my-orders/last" className="bg-blue-500 text-white rounded-lg w-full h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:bg-blue-600">
                <button 
                  onClick={() => handleCheckout()}
                >
                  Checkout
                </button>
              </Link>
              )
          }
        </div>
    </aside>
  );
};
