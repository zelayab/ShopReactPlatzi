import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppinCartContext } from "../../Context"
import { Link } from "react-router-dom"
import OrdersCards from "../../Components/OrdersCards";

function MyOrders() {
  const context = useContext(ShoppinCartContext);

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6 m-10">
          <h1> My Orders</h1>
        </div>
        {
          context.order.map((order) => (
            <Link key={order.id} to={`/my-orders/${order.id}`} className="flex justify-center items-center hover:bg-gray-100 transition-colors duration-200 rounded-lg p-4 mb-4 border border-gray-200">
              <OrdersCards 
                key={order.id}
                orderDate={order.date}
                total={order.total}
                numProducts={order.products.length}
                className="flex justify-center items-center"
              />
						</Link>
					))
        }
      </Layout>
    )
  }
  
  export default MyOrders
  