import React, { useContext } from "react";
import ProductsDetail from "../../ProductsDetail/ProductsDetail";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../context";

function Details() {
  const { id } = useParams();
  const store = useContext(GlobalContext);
  console.log(store, "id");
  const gadgetDetails = store.Products.find((info) => info.id == id);
  const test = store.Products;
  console.log(test, "gadgetDetails");
  if (!gadgetDetails) {
    return <p>No Gadget Detail Availabe....</p>;
  }

  return (
    <div>
      <ProductsDetail
        title={gadgetDetails.title}
        img={gadgetDetails.img}
        company={gadgetDetails.company}
        price={gadgetDetails.price}
        details={gadgetDetails.info}
        key={gadgetDetails.id}
      />
    </div>
  );
}

export default Details;
