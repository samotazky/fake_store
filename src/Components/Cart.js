import { useCart } from "../Context/CartContext"
import { FaCartShopping, FaTrashCan } from "react-icons/fa6"

import "./Cart.css"
import { useState } from "react"

const Cart = () => {
  const { cartItems, removeFromCart, cartIconGreen, cartIconRed } = useCart()
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCartVisibility = () => {
    setIsCartVisible(prevVisibility => !prevVisibility)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  return <div className="cart">
    <button
      className={`btn-cart ${cartIconGreen ? "green" : ""} ${cartIconRed ? "red" : ""}`}
      onClick={toggleCartVisibility}>
      <FaCartShopping />
    </button>
    {isCartVisible && (
      <div className="cart-details">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {
              cartItems.map((item, id) => (
                <div key={id} className="cart-item">
                  <p className="cart-item-title">{item.title}</p>
                  <span className="cart-item-price">{item.price}€</span>
                  <button
                    className="btn-delete"
                    onClick={() => removeFromCart(item.id)}>
                    <FaTrashCan />
                  </button>
                </div>
              ))
            }
            <div>
              <h3 className="total-price">{getTotalPrice()} €</h3>
            </div>
            <button>Objednať</button>
          </>
        )}
      </div>
    )}
  </div >
}

export default Cart
