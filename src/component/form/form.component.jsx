import InputForm from "../../component/input-form/input-form.component";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import "./form.styles.scss";

const Form = () => {
  return (
    <form className="form">
      <p className="header__center">or</p>
      <InputForm className="form__input" placeholder="Email" required />
      <InputForm className="form__input" placeholder="Password" required />
      <div className="form__check">
        <div className="check__container">
          <InputForm type="checkbox" />
          <p className="reminder">Remember for 3 days</p>
        </div>

        <Link className="form__link" to="/forgot-password">
          Forgot password
        </Link>
      </div>

      <Button text="Log in" />
    </form>
  );
};

export default Form;
