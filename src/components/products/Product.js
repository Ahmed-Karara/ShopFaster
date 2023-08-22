import React from "react";
import TopSelling from "../topSelling/TopSelling";

import OnSale from "../onSale/OnSale";
import Category from "../category/Category";

const Product = () => {
  return (
    <>
      <Category />
      <TopSelling />
      <OnSale />
    </>
  );
};

export default Product;
