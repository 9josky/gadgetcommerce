import React, { useContext } from "react";
import Button from "../Button/Button";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

import styles from "./ItemCard.module.css";

function ItemCard({ image, itemName, price, to, id, itemkey }) {
  const store = useContext(GlobalContext);
  const cartItem = store.cartItems;
  console.log(store, "store");
  console.log(cartItem, "cartItem");
  // const cartItem = JSON.parse(localStorage.getItem("cartItems"));

  // if (cartItems.length > 0) {
  const exist = cartItem.find((item) => item.id === id);

  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // console.log(helper, "func");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Link key={itemkey} to={to}>
            <img className={styles.imgCard} src={image} alt="" />
          </Link>

          <div
            className={styles.cartBtn}
            onClick={() => {
              store.Helper(id);

              store.setShow(true);
            }}
          >
            {exist ? (
              <Button
                disabled={true}
                text="in cart"
                bg="#009ffd"
                color="#232528"
                border="none"
                width="50px"
              />
            ) : (
              <Button
                icon={<FaCartPlus size={32} />}
                bg="#009ffd"
                color="#232528"
                border="none"
                width="50px"
              />
            )}
          </div>
        </div>
        <div className={styles.lowerContainer}>
          <h4>{itemName}</h4>
          <span>${price}</span>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
