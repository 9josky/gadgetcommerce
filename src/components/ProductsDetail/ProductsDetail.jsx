import React from "react";
import styles from "./ProductsDetail.module.css";

function ProductsDetail({ title, img, company, price, details }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
      <div className={styles.lowerContainer}>
        <div style={{ width: "500px", height: "500px" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={img}
            alt={title}
          />
        </div>
        <div className={styles.info}>
          <h4>Model : {title}</h4>
          <p>Made By : {company}</p>
          <span>Price : ${price}</span>
          <div className={styles.detail}>
            <h5>some info about the product :</h5>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
