import { useContext } from "react"
import { Card } from "../../Components/Card"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppinCartContext } from "../../Context"


export function Home() {
  const context = useContext(ShoppinCartContext)
  const items = context.items

  
  const renderItems = () => {
  if(context.searchItems) {
  if(!context.filteredItems || context.filteredItems.length === 0) {
        return (
          <div className="flex justify-center items-center h-96 text-center w-full">
            <p className="text-2xl text-gray-500 text-center">No products found</p>
          </div>
        )
      }
      return (
        context.filteredItems?.map(item => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            id={item.id}
          />
        ))
      )
    } else {
      return (
        items?.map(item => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            id={item.id}
          />
        ))
      )
    }
  }

  
    return (
          <Layout>
            <h1 className="text-3xl font-bold m-5">Products</h1>
            <div className="flex items-center justify-between mb-4">
              <input type="text" placeholder="Search products" className="border border-gray-300 rounded-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onChange={(e) => {
                  context.setSearchItems(e.target.value)
                }}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-5">Search</button>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {renderItems()}
            </section>
            {context.isProductDetailOpen && 
              <ProductDetail 
              />
            }
            {context.isCheckoutSideMenuOpen && 
              <CheckoutSideMenu 
              />
            }	
          
          </Layout>
  )
}

export default Home