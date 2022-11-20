import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../redux/auth/actions";

const Signin = ({ toggleForm, hideModal, login }) => {
  const [showPwd, setShowPwd] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    login(data, hideModal);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "required*",
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
        {errors.email?.type === "pattern" && (
          <p role="alert">email is invalid*</p>
        )}
      </div>
      <br />
      <br />
      <div className="col-12">
        <div className="pwd-input-wrapper">
          <input
            type={showPwd ? "text" : "password"}
            {...register("password", { required: "required*" })}
          />
          <img
            className="toggle-show c-pointer"
            src={
              showPwd
                ? "./assets/vectors/pwd-hide.svg"
                : "./assets/vectors/pwd-show.svg"
            }
            onClick={() => setShowPwd((prevState) => !prevState)}
            alt="show-hide"
          />
        </div>
        {errors.password && <p role="alert">{errors.password?.message}</p>}
      </div>
      <br />
      <button type="submit" className="btn btn-grey mt-4">
        Sign In
      </button>
      <div className="fw-500 mt-3">
        Don't Have An Account?{" "}
        <span
          onClick={toggleForm}
          className="form-toggler text-primary-1 text-underlined c-pointer"
        >
          Sign up
        </span>
      </div>
    </form>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    login: function (data, hideModal) {
      dispatch(login(data, hideModal));
    },
  };
};

export default connect(null, mapDispatchtoProps)(Signin);
