import { createContext, useState, useEffect, useContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartIconGreen, setCartIconGreen] = useState(false)
    const [cartIconRed, setCartIconRed] = useState(false)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const categories = [...new Set(products.map(product => product.category))]

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
        setCartIconGreen(true)
    }

    useEffect(() => {
        if (cartIconGreen) {
            setTimeout(() => {
                setCartIconGreen(false)
            }, 700)
        }
    }, [cartIconGreen])

    //ZABEZPEČIŤ ABY SA NEVYMAZÁVALI ITEMY S ROVNAKYM ID ALE INDEXOM V POLI
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
        setCartIconRed(true)
    }

    useEffect(() => {
        if (cartIconRed) {
            setTimeout(() => {
                setCartIconRed(false)
            }, 700)

        }
    }, [cartIconRed])

    return (
        <CartContext.Provider value={{ products, cartItems, cartIconGreen, cartIconRed, categories, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)