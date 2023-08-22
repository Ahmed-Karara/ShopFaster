import React, { useEffect } from "react";
import "./OurService.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import globe from "../../assets/payment and service/globe-free.png";
import lock from "../../assets/payment and service/lock-free.png";
import quality from "../../assets/payment and service/quality-free.png";
import tag from "../../assets/payment and service/tag-free.png";
const OurService = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

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
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: "-20vh" }}
        animate={animation}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-2">Our Service</h1>
        <hr className="mb-1 "></hr>
      </motion.div>

      <div ref={ref} className="d-flex justify-content-evenly flex-wrap mb-4">
        <motion.div
          initial={{ opacity: 0, y: "-20vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="service"
        >
          <img src={globe} alt={globe} />

          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={animation}
            transition={{ duration: 0.5 }}
          >
            Worldwide Shipping
          </motion.h4>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-40vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="service"
        >
          <img src={lock} alt={lock} />

          <motion.h4
            initial={{ y: "30vh", opacity: 0 }}
            animate={animation}
            transition={{ duration: 0.5 }}
          >
            Secure Payments
          </motion.h4>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, y: "20vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="service"
        >
          <img src={quality} alt={quality} />

          <motion.h4
            initial={{ y: "40vh", opacity: 0 }}
            animate={animation}
            transition={{ duration: 0.5 }}
          >
            Best Quality
          </motion.h4>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "20vh" }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="service"
        >
          <img src={tag} alt={tag} />

          <motion.h4
            initial={{ y: "60vh", opacity: 0 }}
            animate={animation}
            transition={{ duration: 0.5 }}
          >
            Best Offers
          </motion.h4>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default OurService;
