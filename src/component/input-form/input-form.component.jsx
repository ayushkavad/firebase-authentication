import { Fragment } from "react";
import "./input-form.styles.scss";

const InputForm = ({ ...other }) => {
  return (
    <Fragment>
      <input className="form__input" {...other} />
    </Fragment>
  );
};

export default InputForm;
