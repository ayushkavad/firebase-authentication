import { Fragment } from "react";
import "./button.styles.scss";

const Button = ({ buttonType, text, ...other }) => {
  return (
    <Fragment>
      {buttonType ? (
        <button className="direct__btns" type="button" {...other}>
          <img src={require(`../../assets/${buttonType}.png`)} width="25" />
          <span>{text}</span>
        </button>
      ) : (
        <button className="form__btn">{text}</button>
      )}
    </Fragment>
  );
};

export default Button;
