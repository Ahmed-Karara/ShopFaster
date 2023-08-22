import "./Loader.css";
import { BiLoader } from "react-icons/bi";
const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <BiLoader size={50} />
      </div>
    </div>
  );
};

export default Loader;
