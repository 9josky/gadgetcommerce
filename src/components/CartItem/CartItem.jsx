import React, { useContext } from "react";
import { GlobalContext } from "../../context";
// import { MdOutlineDelete } from "./react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";

import styles from "./CartItem.module.css";

function CartItem({ image, title, price, count, total, id }) {
  const store = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cartitems}>
        <div className={styles.title}>Product:</div>
        <div className={styles.value}>{title}</div>
      </div>
      <div className={styles.cartitems}>
        <div className={styles.title}>Price:</div>
        <div className={styles.value}>${price}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            store.decreament(id);
            store.forceUpdate();
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            store.increament(id);
            store.forceUpdate();
          }}
        >
          +
        </button>
      </div>
      <div
        onClick={() => {
          store.remove(id);
        }}
        style={{ color: "red" }}
      >
        <MdOutlineDeleteForever size={32} className={styles.delete} />
      </div>
      <div className={styles.cartitems}>
        <div className={styles.title}>Item Total:</div>
        <div className={styles.value}>${total}</div>
      </div>
    </div>
  );
}
// import { MdOutlineDeleteForever } from "react-icons/md";

export default CartItem;
