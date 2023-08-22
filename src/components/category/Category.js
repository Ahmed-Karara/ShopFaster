import React, { useEffect, useRef, useState } from "react";
import "./Category.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";
import { FilterProduct, allProducts } from "../../redux/features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import { FaSearch } from "react-icons/fa";

export const categories = ["laptop", "phone", "TV", "accessories", "console"];
const Category = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();
  const focus = useRef();

  const [name, setName] = useState("");
  const product = useSelector(allProducts);
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <div className="options" ref={ref}>
        <h2 className="text-center fw-bold  mb-4">Categories</h2>
        <motion.div
          className="category"
          initial={{ opacity: 0, y: "-30vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => {
            return (
              <Link key={index} to={"/filteredProducts/" + category}>
                <button
                  className="m-4"
                  variant="success"
                  onClick={() => dispatch(FilterProduct(category))}
                >
                  {category}
                </button>
              </Link>
            );
          })}
        </motion.div>
        <div className="search">
          <input
            placeholder="search by product name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={focus}
          />
          <div>
            <FaSearch
              size={23}
              color="gray"
              cursor="pointer"
              onClick={() => focus.current.focus()}
            />
          </div>
        </div>
        <div className={name.length < 3 ? "d-none" : "filter"}>
          <h2 className="text-muted mt-3 fw-bold">Search Results</h2>

          <ProductCard
            product={product.filter((product) =>
              name.toLowerCase() === product.name.toLowerCase().includes(name)
                ? ""
                : product.name.toLowerCase().includes(name.toLowerCase())
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
