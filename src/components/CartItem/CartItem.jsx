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
      <div>Product: {title}</div>
      <div>Price: ${price}</div>
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
      <div>Item Total: {total}</div>
    </div>
  );
}
// import { MdOutlineDeleteForever } from "react-icons/md";

export default CartItem;
