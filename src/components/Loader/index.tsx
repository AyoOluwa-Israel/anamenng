import GridLoader from "react-spinners/GridLoader";
import "./style.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__icon">
        <GridLoader />
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
