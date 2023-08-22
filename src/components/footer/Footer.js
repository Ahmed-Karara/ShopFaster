import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";
import { logo } from "../header/Header";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
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
      });
    }
  }, [inView, animation, animate, animator]);
  return (
    <div className="footer" ref={ref}>
      <div className="about">
        <motion.div
          className="slogan"
          initial={{ opacity: 0 }}
          animate={animator}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
        >
          <div>{logo}</div>
          <div className="text-capitalize text-center">
            All the best for a whole lot less.
          </div>
        </motion.div>
        <div className="us">
          <motion.h1
            initial={{ x: "20vh", opacity: 0 }}
            animate={animate}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: "-20vh" }}
            animate={animation}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <b> ShopFaster</b> is a leading company in the electronic shopping
            field and Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </motion.div>
        </div>
      </div>
      <div className="media">
        <div>&copy; {year} All Rights Reserved</div>
        <div className="social">
          <FaFacebookF size={23} />
          <FaYoutube size={23} />
          <FaTwitter size={23} />
          <FaGoogle size={23} />
          <FaInstagram size={23} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
