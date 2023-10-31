import React, { useState, useContext, useEffect } from 'react';
import { FiCheck, FiPlus } from 'react-icons/fi';
import { ShoppinCartContext } from '../../Context';

export const Card = ({ title, price, description, category, image, id }) => {
  const { count, setCount } = useContext(ShoppinCartContext);
  const context = useContext(ShoppinCartContext);

  const [isInCart, setIsInCart] = useState(false);

  // Verifica si el producto está en el carrito al cargar el componente
  useEffect(() => {
    const isInMyOrder = context.cartProducts.find((product) => product.id === id);
    setIsInCart(!!isInMyOrder); // Actualiza el estado "isInCart" basado en si el producto está en el carrito
  }, [context.cartProducts, id]);

  const showProductDetail = (productDetail) => {
    context.handleOpenProductDetail();
    context.setProductToShow(productDetail);
  }

  const addProductToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    setIsInCart(true); // Cambia el estado local para indicar que está en el carrito
  }

  const removeProductFromCart = () => {
    const updatedCartProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(updatedCartProducts);
    setIsInCart(false); // Cambia el estado local para indicar que no está en el carrito
  }

  const handlePlusClick = (event) => {
    event.stopPropagation();
    if (isInCart) {
      removeProductFromCart();
    } else {
      addProductToCart({ title, price, description, category, image, id });
    }
  }

  return (
    <div 
      className="bg-white cursor-pointer w-64 rounded-lg shadow-lg p-4 relative border border-black border-opacity-10 transition-transform transform hover:scale-105 hover:shadow-2xl"
      onClick={() => showProductDetail({ title, price, description, category, image, id })}
    >
      <div className="mb-4 relative aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-t-lg w-full h-64 transition-transform transform hover:scale-105 hover:shadow-2xl"
        />
        {isInCart ? (
          <button
            className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 hover:bg-green-600"
            onClick={handlePlusClick}
          >
            <FiCheck />
          </button>
        ) : (
          <button
            className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 hover:bg-blue-600"
            onClick={handlePlusClick}
          >
            <FiPlus />
          </button>
        )}
      </div>
      <div className="text-gray-800 mb-2">
        <span className="bg-blue-200 text-blue-800 text-xs rounded-full px-2 py-1">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-left h-20 overflow-hidden">
          {title}
        </h3>
      </div>
     
      <div className="flex justify-between items-center">
        <span className="text-gray-800 text-left">Precio:</span>
        <span className="font-bold text-xl">${price}</span>
      </div>
    </div>
  );
};
