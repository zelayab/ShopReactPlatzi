import React, { useContext } from 'react';
import { ShoppinCartContext } from '../../Context';
import { FiX } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

export const ProductDetail = ({ title, price, description, category, image }) => {
  const context = useContext(ShoppinCartContext);

  const addProductToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  }

  return (
    <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg h-[calc(100vh-100px)] w-1/5 top-18 z-10">
      <h1 className='text-center text-2xl font-bold text-gray-800 m-4 mt-10'>{context.productToShow.title}</h1>
      <div className="flex justify-between items-center p-4 mb-6">
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 hover:bg-blue-600"
          onClick={() => context.handleCloseProductDetail()}
        >
          <FiX />
        </button>
      </div>

      <div className="mb-4 relative aspect-w-16 aspect-h-9 border-b border-black border-opacity-10">
        <img
          src={context.productToShow.image}
          alt={context.productToShow.title}
          className="object-cover rounded-t-lg w-48 h-48 m-auto"
        />
      </div>

      <div className="text-gray-800 mb-2 text-center">
        <span className="bg-blue-200 text-blue-800 text-xs rounded-full px-2 py-1">
          {context.productToShow.category}
        </span>
      </div>

      <div className="description-container">
        <p className="text-gray-600 mb-4 text-center text-sm px-4 h-40 overflow-y-auto">
          {context.productToShow.description}
        </p>
      </div>

      <div className="flex justify-between items-center m-auto">
        <span className="text-gray-800 text-left">Precio:</span>
        <span className="font-bold text-xl">${context.productToShow.price}</span>
      </div>
       <button
        className="bg-blue-500 text-white h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110
         hover:bg-blue-600 m-auto mt-4 p-2 rounded-lg w-3/4"
        onClick={() => addProductToCart(context.productToShow)}
      >
        Add to cart
      </button> 
    </aside>
  );
};
