import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.secondaryContainer}>
          <ul>
            <li>
              <NavLink to="/">
                <img src={"./logo.9f7e506d.svg"} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.lowerContainer}>
          <NavLink to="/cart">
            <Button
              text="cart"
              bc="red"
              color="white"
              border="2px solid #006fb1"
              icon={<FaCartPlus size={32} />}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
