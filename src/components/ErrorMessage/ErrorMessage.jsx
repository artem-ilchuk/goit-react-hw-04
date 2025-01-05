import s from "./ErrorMessage.module.css";
import { FaRegGrimace } from "react-icons/fa";

const ErrorMessage = () => {
  return (
    <div className={s.error}>
      <FaRegGrimace className={s.icon} />
      <h2 className={s.text}>Something went wrong! Try again...</h2>
    </div>
  );
};

export default ErrorMessage;
