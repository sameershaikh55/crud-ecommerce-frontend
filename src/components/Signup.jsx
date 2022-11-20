import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { signup } from "../redux/auth/actions";

const Signup = ({ toggleForm, hideModal, signup }) => {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd1, setShowPwd1] = useState(false);
  const [passNotMatch, setPassNotMatch] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { fname, lname, email, phone, password, cpassword } = data;

    if (password === cpassword) {
      setPassNotMatch(false);
      signup({ fname, lname, email, phone, password }, hideModal);
    } else {
      setPassNotMatch(true);
    }
  };

  return (
    <form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-6">
        <input
          type="text"
          placeholder="First Name"
          {...register("fname", { required: "required*" })}
        />
        {errors.fname && <p role="alert">{errors.fname?.message}</p>}
      </div>
      <div className="col-lg-6">
        <input
          type="text"
          placeholder="Last Name"
          {...register("lname", { required: "required*" })}
        />
        {errors.lname && <p role="alert">{errors.lname?.message}</p>}
      </div>
      <div className="col-lg-6">
        <input
          type="email"
          placeholder="Email address"
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
      <div className="col-lg-6">
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", { required: "required*" })}
        />
        {errors.phone && <p role="alert">{errors.phone?.message}</p>}
      </div>
      <div className="col-lg-6">
        <div className="pwd-input-wrapper">
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: "required*", minLength: 8 })}
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
        {errors.password?.type === "minLength" && (
          <p role="alert">minimum 8 characters</p>
        )}
      </div>
      <div className="col-lg-6">
        <div className="pwd-input-wrapper">
          <input
            type={showPwd1 ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("cpassword", { required: "required*" })}
          />
          <img
            className="toggle-show c-pointer"
            src={
              showPwd1
                ? "./assets/vectors/pwd-hide.svg"
                : "./assets/vectors/pwd-show.svg"
            }
            onClick={() => setShowPwd1((prevState) => !prevState)}
            alt="show-hide"
          />
        </div>
        {errors.cpassword && <p role="alert">{errors.cpassword?.message}</p>}
        {passNotMatch && <p role="alert">password does not match</p>}
      </div>
      <button type="submit" className="btn btn-grey mt-4">
        Sign up
      </button>
      <div className="fw-500 mt-3">
        Already Have An Account?{" "}
        <span
          onClick={toggleForm}
          className="form-toggler text-primary-1 text-underlined c-pointer"
        >
          Sign in
        </span>
      </div>
    </form>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    signup: function (data, hideModal) {
      dispatch(signup(data, hideModal));
    },
  };
};

export default connect(null, mapDispatchtoProps)(Signup);
