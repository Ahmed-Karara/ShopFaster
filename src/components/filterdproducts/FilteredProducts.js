import React, { useRef, useState } from "react";
import "./FilteredProducts.css";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";
import { selectedProducts } from "../../redux/features/ProductSlice";
import { FaSearch } from "react-icons/fa";

const FilteredProducts = () => {
  const [name, setName] = useState("");
  const product = useSelector(selectedProducts);

  const { category } = useParams();
  const ref = useRef();

  return (
    <div className="filtered">
      <h3 className="p-3 text-center text-bg-primary text-uppercase">
        {category} Stock
      </h3>
      <div className="search">
        <input
          placeholder="search by product name..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={ref}
        />
        <div>
          <FaSearch
            size={23}
            color="gray"
            cursor="pointer"
            onClick={() => ref.current.focus()}
          />
        </div>
      </div>
      <div className={name.length < 0 ? "d-none" : ""}>
        {/*   <h2 className="text-muted mt-3">Search Result</h2> */}
        <ProductCard
          product={product.filter((product) =>
            name.toLowerCase() === product.name.toLowerCase().includes(name)
              ? ""
              : product.name.toLowerCase().includes(name.toLowerCase())
          )}
        />
        {product.map((product) =>
          name.toLowerCase() ===
          product.name.toLowerCase().includes(name.toLowerCase())
            ? console.log("true")
            : console.log(product.name)
        )}
      </div>

      <div className={name !== "" ? "d-none" : ""}>
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default FilteredProducts;
