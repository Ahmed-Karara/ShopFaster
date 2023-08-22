import { useEffect, useState } from "react";
import { sliderData } from "./SliderData";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Slider.css";
import { FilterProduct } from "../../redux/features/ProductSlice";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const dispatch = useDispatch();

  const autoScroll = true;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  let slideInterval;
  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  const redirectUser = (category) => {
    dispatch(FilterProduct(category));
  };

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt={image} className="img-fluid" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <Link to={"/filteredProducts/" + slide.category}>
                    <button
                      onClick={() => redirectUser(slide.category)}
                      className="btn btn-primary "
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
