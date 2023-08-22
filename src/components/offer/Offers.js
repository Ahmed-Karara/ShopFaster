import React, { useEffect } from "react";
import "./Offers.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import headphone from "../../assets/products/Accessories/headphone/wireless-headphone.jpg";
import appleIphone from "../../assets/products/phones/apple/Apple-iPhone14-Pro-Max.jpg";
import PS5 from "../../assets/products/Consoles/PS5/ps5-console.jpg";
const Offers = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  const animate = useAnimation();
  const animator = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
      animate.start({
        opacity: 1,
        x: 0,
      });
      animator.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation, animate, animator]);
  return (
    <div>
      <div
        ref={ref}
        className="d-flex justify-content-evenly gap-3 flex-wrap mb-4"
      >
        <motion.div
          initial={{ opacity: 0, y: "20vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="offer"
        >
          <div>
            <motion.h1
              initial={{ y: "30vh", opacity: 0 }}
              animate={animation}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Wireless headphones
            </motion.h1>
            <p>starting at 45$</p>
            <Link to="/product" className="btn btn-primary">
              Shop now
            </Link>
          </div>
          <div style={{ zIndex: -1 }}>
            <img src={headphone} alt={headphone} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-20vw" }}
          animate={animate}
          transition={{ duration: 0.5 }}
          className="offer"
        >
          <div>
            <motion.h1
              initial={{ y: "30vh", opacity: 0 }}
              animate={animation}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Apple Iphone
            </motion.h1>
            <p>starting at 999$</p>
            <Link to="/product" className="btn btn-primary">
              Shop now
            </Link>
          </div>
          <div>
            <img src={appleIphone} alt={appleIphone} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-20vh" }}
          animate={animator}
          transition={{ duration: 0.5 }}
          className="offer"
        >
          <div>
            <motion.h1
              initial={{ y: "30vh", opacity: 0 }}
              animate={animation}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Video games
            </motion.h1>
            <p>starting at 350$</p>
            <Link to="/product" className="btn btn-primary">
              Shop now
            </Link>
          </div>
          <div>
            <img src={PS5} alt={PS5} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;
