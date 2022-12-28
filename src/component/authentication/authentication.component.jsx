import InputForm from "../input-form/input-form.component";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="container">
      <div className="container__form">
        <div className="container__greet">
          <h2 className="container__greet__title">Welcome back</h2>
          <p className="container__greet__info">Please enter your details.</p>
        </div>

        <form className="form">
          <InputForm placeholder="Enter your email" required />
          <Button text="Continue" />

          <p className="form__line">OR</p>

          <div className="direct">
            <Button other="google" text="Continue with Google" />
            <Button other="facebook" text="Continue with Facebook" />
            <Button other="apple" text="Continue with Apple" />
          </div>
        </form>

        <div className="quation">
          <p className="quation__info">Don't have an account?</p>
          <Link className="quation__link" to="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
      <div className="img"></div>
    </div>
  );
};

export default Authentication;
