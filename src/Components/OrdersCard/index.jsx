import React from 'react'



export const OrdersCard = props => {
    const { totalPrice, totalProducts,date } = props

    return (
        <div className="flex justify-between items-center p-4 mb-6 border-b border-black border-opacity-10">
            <p>
                {date}
            </p>
            <div className="flex items-center gap-4">
                <p className="text-gray-800 text-left text-sm font-semibold">
                    {totalProducts} Products
                </p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-gray-800 text-left text-sm font-semibold">
                    ${totalPrice}
                </p>
            </div>
        </div>
    )
}





