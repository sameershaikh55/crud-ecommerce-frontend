import React, { useState } from "react";
import clsx from "clsx";

import Navbar from "../partials/Navbar/Navbar";
import Footer from "../partials/Footer/Footer";

import AuthModal from "../Modals/AuthModal";

const MainLayout = ({ rootClassName, children }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      <AuthModal
        isModalActive={isModalActive}
        hideModal={() => {
          setIsModalActive(false);
        }}
      />
      <Navbar
        showModal={() => {
          setIsModalActive(true);
        }}
      />

      <div className={clsx(rootClassName, "main-screen-content")}>
        {children}
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
