import React, { useEffect } from "react";
import "./Sale.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";

const Sale = () => {
  const text = "on all onsale products";
  const { ref, inView } = useInView({ threshold: 0.6 });
  const animation = useAnimation();

  const scrollWithOffset = (ele) => {
    const yCoordinate = ele.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset });
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <div className="sale">
      <div className="desc" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 0.7 }}
          className="text1 mb-3"
        >
          Special offer
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text2"
        >
          for a limited time, up to 30% off
        </motion.span>

        <motion.div className="text3">
          {text.split("").map((text, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={animation}
              transition={{ duration: 0.1, delay: 0.5 + index * 0.1 }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <HashLink scroll={(ele) => scrollWithOffset(ele)} to="/product/#sale">
            Discover More
          </HashLink>
        </motion.button>
      </div>
    </div>
  );
};

export default Sale;
