/* creamos iconos desde react/icons */
import { FaMoneyBill,FaRegCalendarCheck,FaArrowRight } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";



const OrdersCards = ({orderDate, total, numProducts}) => {
    const context = useContext(ShoppinCartContext);

    return (

        <>
            <div className="flex justify-between items-center mb-3  p-3">
                <div className="flex items-center justify-between grow gap-2 px-4">
                    <div className="flex gap-1 items-center justify-center">
                        <FiShoppingCart className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{`${numProducts} ${numProducts === 1 ? "producto" : "productos"}`}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center ">
                        <FaMoneyBill className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{`$${total}`}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <FaRegCalendarCheck className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{orderDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaArrowRight className="h-6 w-6 text-black" />
                </div>
            </div>
        </>
    );
}

export default OrdersCards;