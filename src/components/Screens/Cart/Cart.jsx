import React, { useContext } from "react";
import { GlobalContext } from "../../../context";
import CartItem from "../../CartItem/CartItem";

import styles from "./Cart.module.css";

function Cart() {
  const store = useContext(GlobalContext);
  const cartItem = store.cartItems;
  console.log(cartItem, "cartItem");
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
  const itemsPrice = cartItem.reduce((a, b) => a + b.price * b.count, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log(itemsPrice, "itemsPrice");
  return (
    <>
      <div>
        {cartItem.length === 0 && <div>Your cart is currently empty</div>}
      </div>
      {cartItem.map((item) => (
        <div>
          <CartItem
            image={item.img}
            title={item.title}
            price={item.price}
            count={item.count}
            total={item.total}
            // key={item.id}
            id={item.id}
          />
        </div>
      ))}

      {cartItem.length !== 0 && (
        <div>
          <hr />
          <div className={styles.container}>
            <div className={styles.itemContainer}>
              <div>SUBTOTAL:</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className={styles.itemContainer}>
              <div>TAX:</div>
              <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div className={styles.itemContainer}>
              <div>SHIPPING:</div>
              <div>${shippingPrice.toFixed(2)}</div>
            </div>
            <div className={styles.itemContainer}>
              <div>TOTAL:</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
