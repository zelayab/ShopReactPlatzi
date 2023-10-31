import React from 'react'
import { FiTrash } from 'react-icons/fi'



export const OrderCard = props => {
    const { title, price, image, id, handleDeleteProduct } = props

    return (
        <div className="flex justify-between items-center p-4 mb-6 border-b border-black border-opacity-10">
            <div className="flex items-center gap-4">
               
                <figure className="rounded-lg overflow-hidden shadow-lg">
                    <img src={image} alt={title} className="w-20 h-20 object-cover" />
                </figure>
                <p className="text-gray-800 text-left text-sm font-semibold w-40">
                    {title}
                </p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-gray-800 text-left text-sm font-semibold">
                    ${price}
                </p>
                {
                    handleDeleteProduct 
                    ?
                        <button className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 hover:bg-red-600">
                            <FiTrash onClick={() => handleDeleteProduct(id)} />
                        </button>
                    :   null
                }
                
            </div>
        </div>
    )
}