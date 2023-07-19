import React, { useContext } from "react";
import ItemCard from "../../ItemCard/ItemCard";
import { GlobalContext } from "../../../context";
// import { Link, useParams } from "react-router-dom";
import ItemModal from "../../ItemModal/ItemModal";

import styles from "./Home.module.css";

function Home() {
  const store = useContext(GlobalContext);
  console.log(store);
  return (
    <>
      <div className={styles.container}>
        {store.Products.map((product) => (
          <div className={styles.minicontainer}>
            <ItemCard
              className={styles.flexItem}
              key={product.id}
              to={`/details/${product.id}`}
              image={product.img}
              itemName={product.title}
              price={product.price}
              id={product.id}
            />
          </div>
        ))}
      </div>
      <div>
        {store.show ? (
          <ItemModal
            img={store.preview.img}
            title={store.preview.title}
            price={store.preview.price}
          />
        ) : null}
      </div>
      {/* {(store.show = null) ? (store.Products = [...store.Products]) : null} */}
    </>
  );
}

export default Home;