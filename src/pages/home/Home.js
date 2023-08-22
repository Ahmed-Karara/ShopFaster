import Category from "../../components/category/Category";
import Offers from "../../components/offer/Offers";
import OnSale from "../../components/onSale/OnSale";
import OurService from "../../components/ourService/OurService";
import Sale from "../../components/sale/Sale";
import Slider from "../../components/sllider/Slider";
import TopSelling from "../../components/topSelling/TopSelling";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-around gap-4 ">
      <Slider />
      <Category />
      <TopSelling />
      <Offers />
      <Sale />
      <OnSale />
      <OurService />
    </div>
  );
};

export default Home;
