import React, { useContext } from "react";
import Button from "../Button/Button";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";
import styles from "./ItemModal.module.css";

function ItemModal({ title, img, price }) {
  const store = useContext(GlobalContext);
  console.log(store, "store");
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div>
          <h3>Item added to the cart</h3>
        </div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4>Price: {price}</h4>
        </div>
        <div className={styles.footer} style={{ paddingBottom: "10px" }}>
          <div onClick={store.CloseModal}>
            <Button
              text="Store"
              color="#ffa400"
              width="80px"
              border="2px solid #ffa400"
            />
          </div>
          <Link to="/cart">
            <div onClick={store.CloseModal}>
              <Button
                text="Go To Cart"
                color="#009ffd"
                border="2px solid #009ffd"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
