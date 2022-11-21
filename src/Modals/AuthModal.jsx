import React, { useState } from "react";
import clsx from "clsx";

import GridContainer from "../components/GridContainer/GridContainer";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import ProductForm from "../components/ProductForm";

const Modal = ({
  isModalActive,
  hideModal,
  productFormModal,
  productToEdit,
}) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={clsx("overlay", { active: isModalActive })}
        onClick={hideModal}
      />
      <div
        id="auth-modal"
        className={clsx("modal", { isSignup, active: isModalActive })}
      >
        <div className="left"></div>
        <div className="right">
          <div className="main">
            {productFormModal ? (
              (productToEdit !== null && <h3>Update Product</h3>) || (
                <h3>Add Product</h3>
              )
            ) : (
              <h3>Sign {isSignup ? "Up" : "In"} Now</h3>
            )}

            <p className="mt-3">
              Placeholder text is the label for possible content in a text box.
              It can normally be found Placeholder.
            </p>

            <GridContainer rowClassName="gy-4 mt-2">
              {productFormModal ? (
                <ProductForm
                  toggleForm={toggleForm}
                  hideModal={hideModal}
                  productToEdit={productToEdit}
                />
              ) : isSignup ? (
                <Signup toggleForm={toggleForm} hideModal={hideModal} />
              ) : (
                <Signin toggleForm={toggleForm} hideModal={hideModal} />
              )}
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
