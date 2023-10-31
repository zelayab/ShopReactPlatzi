import { useRoutes, BrowserRouter }  from 'react-router-dom'
import { ShoppinCartProvider } from '../../Context'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { Navbar } from '../../Components/Navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},

    { path:'/clothing', element:<Home />},
    { path:'/electronics', element:<Home />},
    { path:'/"jewelery"', element:<Home />},
    { path:'/toys', element:<Home />},
    { path:'/others', element:<Home />},
    {path: '/category/:category', element:<Home />},

    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders',element: <MyOrders />},
    { path: '/my-orders/last',element: <MyOrder />},
    { path: '/my-orders/:id',element: <MyOrder />},
    { path: '/sign-in', element: <SignIn />},
    { path: '*', element: <NotFound />}
  ])

  return routes
}

function App() {

  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppinCartProvider>
  )
  
  
}

export default App
