import { createContext, useState, useEffect, useContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartIconGreen, setCartIconGreen] = useState(false)
    const [cartIconRed, setCartIconRed] = useState(false)

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
    };

    useEffect(() => {
        if (cartIconRed) {
           setTimeout(() => {
                setCartIconRed(false)
            }, 700)
            
        }
    }, [cartIconRed])

    return (
        <CartContext.Provider value={{ cartItems, cartIconGreen, cartIconRed, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)