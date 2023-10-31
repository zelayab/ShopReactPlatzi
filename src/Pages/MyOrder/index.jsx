import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { useContext } from "react"
import { ShoppinCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"


function MyOrder() {
    const context = useContext(ShoppinCartContext);
    let currentPath = window.location.pathname
    let index = currentPath.lastIndexOf('/') + 1
    let id = currentPath.substr(index)


    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-6 mt-10'>
          <Link to='/my-orders' className='absolute left-0'>
            <FiChevronLeft className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1>My Order</h1>
        </div>
        <div className="flex  justify-between items-center overflow-y-auto gap-2 flex-wrap">
          {
            context.order?.slice(-1)[0]?.products?.map((product) => (
              <OrderCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
              />
            ))
         }
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  