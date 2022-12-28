import { Fragment } from "react";
import "./button.styles.scss";

const Button = ({ other, text }) => {
  return (
    <Fragment>
      {other ? (
        <button className="direct__btns" type="button">
          <img src={require(`../../assets/${other}.png`)} width="25" />
          <span>{text}</span>
        </button>
      ) : (
        <button className="form__btn">{text}</button>
      )}
    </Fragment>
  );
};

export default Button;
