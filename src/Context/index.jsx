import React, { createContext, useState, useEffect } from 'react';

export const ShoppinCartContext = createContext();

export const ShoppinCartProvider = ({ children }) => {

    //Counter Shopping Cart
    const [count, setCount] = useState(0);

    //Open Close PDP
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const handleOpenProductDetail = () => {
        setIsProductDetailOpen(true);
    }
    const handleCloseProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    //PDP
    const [productToShow, setProductToShow] = useState({});

    //Cart Products Shopping Cart - Add to Cart
    const [cartProducts, setCartProducts] = useState([]);

    //Open Close Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const handleOpenCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
    }
    const handleCloseCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false);
    }

    //Checkout Side Menu - Order Summary
    const [order, setOrder] = useState([]);

    //Get Products from API Fake Store
    const [items,setItem] = useState(null)


    //Get products by search
    const [searchItems, setSearchItems] = useState(null)

    //Get products by category
    const [filteredItems, setFilteredItems] = useState(null)

    //function to filter products by category
    const filterItemsByTitle = (items, searchItems) => {
        return items?.filter((item) => {
            return item.title.toLowerCase().includes(searchItems.toLowerCase())
        })
    }

    //function to filter products by category from navbar
    const [selectedCategory, setSelectedCategory] = useState(null)

    const filterItemsByCategory = (items, selectedCategory) => {
        console.log('entro aqui')
        return items?.filter((item) => {
            return item.category.name.toLowerCase().includes(selectedCategory.toLowerCase())
        })
    }


    useEffect(() => {
        if(searchItems) {
            setFilteredItems(filterItemsByTitle(items, searchItems))
        }
        if(selectedCategory) {
            setFilteredItems(filterItemsByCategory(items, selectedCategory))
        }
    }, [items, searchItems, selectedCategory])

    
    //Get Products from API Fake Store
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          setItem(data)
        }
        fetchData()
      }, [])
    
    return (
        <ShoppinCartContext.Provider 
            value={{ 
                count, 
                setCount, 
                handleOpenProductDetail, 
                handleCloseProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                handleOpenCheckoutSideMenu,
                handleCloseCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItem,
                filteredItems,
                setFilteredItems,
                searchItems,
                setSearchItems,
                filterItemsByTitle,
                filterItemsByCategory,
                selectedCategory,
                setSelectedCategory
            }}>
            {children}
        </ShoppinCartContext.Provider>
    );
};










