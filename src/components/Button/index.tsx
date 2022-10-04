import "./style.scss";
import { HiArrowNarrowDown } from "react-icons/hi";

const Button = ({ onClick }: any) => {
  return (
    <div className="button" onClick={onClick}>
      <p>VIEW MORE</p> <HiArrowNarrowDown size={18} />
    </div>
  );
};

export default Button;
