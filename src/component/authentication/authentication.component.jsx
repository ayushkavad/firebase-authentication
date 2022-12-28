import {
  signInWithGooglePopup,
  singInWithFacebookPopup,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../input-form/input-form.component";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import "./authentication.styles.scss";

const Authentication = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
  };

  const signInWithFacebook = async () => {
    const response = await singInWithFacebookPopup();
    // console.log(response);
  };

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
            <Button
              buttonType="google"
              text="Continue with Google"
              onClick={signInWithGoogle}
            />
            <Button
              buttonType="facebook"
              text="Continue with Facebook"
              onClick={signInWithFacebook}
            />
            <Button buttonType="github" text="Continue with Github" />
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
