import { useCart } from "../Context/CartContext"
import { FaCartShopping } from "react-icons/fa6"
import { RxCross1 } from "react-icons/rx";

import "./Cart.css"
import { useState } from "react"

const Cart = () => {
  const { cartItems, removeFromCart, cartIconGreen, cartIconRed } = useCart()
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCartVisibility = () => {
    setIsCartVisible(prevVisibility => !prevVisibility)
  }

  const getTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.price, 0)
    return total.toFixed(2);
  }

  return <div className="cart">
    <button
      className={`btn-cart ${cartIconGreen ? "green" : ""} ${cartIconRed ? "red" : ""}`}
      onClick={toggleCartVisibility}>
      <FaCartShopping />
    </button>

    {isCartVisible && (
      <div className="cart-details">
        <div className="cart-header-close">
          <h1>Cart ({cartItems.length})</h1>
          <button className="cart-close" onClick={toggleCartVisibility}><RxCross1 /></button>
        </div>

        <div className="cart-items">
          {
            cartItems.map((item, index) => {
              const { id, title, price, image } = item

              return (
                <div key={index} className="cart-item">
                  <img className="item-img" src={image} alt={title} />

                  <div className="item-content">
                    <h3 className="item-title">{title}</h3>
                    <p>{price} €</p>
                  </div>
                  <button
                    className="btn-delete"
                    onClick={() => removeFromCart(id)}>
                    <RxCross1 />
                  </button>
                </div>
              )
            })
          }
        </div>

        <div className="buy-total-price">
          <h3 className="total-price">{getTotalPrice()} €</h3>
          <button className="btn-buy">BUY</button>
        </div>
      </div>
    )}




    {/* {isCartVisible && (
      <div className="cart-details">
        {cartItems.length === 0 ? (
          <div>
            <button onClick={toggleCartVisibility}><RxCross1 /></button>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <button className="cart-close" onClick={toggleCartVisibility}><RxCross1 /></button>

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
    )} */}
  </div >
}

export default Cart
