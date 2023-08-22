import Carousel from "react-multi-carousel";
import "./TopSelling.css";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductPage, allProducts } from "../../redux/features/ProductSlice";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import sale from "../../assets/payment and service/sale tag.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1150 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1150, min: 905 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet2: {
    breakpoint: { max: 905, min: 615 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 615, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TopSelling = () => {
  const products = useSelector(allProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const viewDetails = (product, category) => {
    dispatch(ProductPage(product));
    navigate("/singleProduct/" + category + "/" + product);
  };
  const { ref, inView } = useInView({ threshold: 0.2 });
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
      <div ref={ref}>
        <motion.div
          className="top-selling"
          initial={{ opacity: 0, y: "20vh" }}
          animate={animation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="heading">
            <h1 className="mb-4">Top Selling</h1>
            <hr className="mb-3"></hr>
          </div>

          <Carousel
            responsive={responsive}
            additionalTransfrom={10}
            arrows
            autoPlay
            pauseOnHover
            autoPlaySpeed={3000}
            className="product-slider"
            draggable
            minimumTouchDrag={50}
            infinite
          >
            {products
              .filter((item) => item.sold >= 5)
              .map((product, index) => {
                return (
                  <div
                    className="product-card"
                    key={index}
                    onClick={() => viewDetails(product.id, product.category)}
                  >
                    <img
                      className={product.sale > 0 ? "sale-img" : "d-none"}
                      src={sale}
                      alt={sale}
                    />
                    <img
                      className="product-img"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <div className="card-info">
                        <h4 className="product-name">{product.name}</h4>
                        <div className="priceTag ">
                          <span
                            className={
                              product.sale > 0
                                ? "text-muted text-decoration-line-through h4"
                                : "h3 text-success"
                            }
                          >
                            ${product.price}
                          </span>
                          <h3
                            className={
                              product.sale > 0 ? "text-success" : "d-none"
                            }
                          >
                            $
                            {product.price -
                              (product.price * product.sale) / 100}
                          </h3>
                        </div>
                        <button>Shop Now</button>
                      </div>
                      <hr />
                      <p>{product.desc}</p>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </motion.div>
      </div>
    </>
  );
};

export default TopSelling;
