import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";

function Navbar() {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppinCartContext);

  const showCheckoutSideMenu = () => {
    context.handleOpenCheckoutSideMenu();
  }


  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {routesLeft.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.filterItemsByCategory(route.label)}

            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">teff@platzi.com</li>
        {routesRight.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.filterItemsByCategory(route.label)}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
        <li className="relative" 
          onClick={() => showCheckoutSideMenu()}
        >
          <FiShoppingCart className="text-2xl" />
          <span className="absolute -top-1 -right-3 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs bg-blue-600 ">
            {context.count}
          </span>
        </li>
      </ul>
      
    </nav>
  );
}

const routesLeft = [];
routesLeft.push({ to: "/", label: "All" });
routesLeft.push({ to: "/clothes", label: "Clothes" });
routesLeft.push({ to: "/electronics", label: "Electronics" });
routesLeft.push({ to: "/furnitures", label: "Furnitures" });
routesLeft.push({ to: "/toys", label: "Toys" });
routesLeft.push({ to: "/others", label: "Others" });

const routesRight = [];
routesRight.push({ to: "/my-orders", label: "My Orders" });
routesRight.push({ to: "/my-account", label: "My Account" });
routesRight.push({ to: "/sing-in", label: "Sign In" });


export { Navbar };