import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Section from "../../components/Section/Section";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import { useNavigate } from "react-router-dom";

const Navbar = ({ showModal, logout, profile }) => {
  const navigate = useNavigate();
  const [isSideNavActive, setIsSideNavActive] = useState();

  const toggleSideNav = () => {
    setIsSideNavActive((prevState) => !prevState);
  };

  return (
    <Section id="navbar">
      <div className="wrapper">
        <Link className="d-inline-flex align-items-center" to="/">
          <img className="logo" src="./assets/vectors/logo.svg" alt="logo" />
        </Link>

        <div className="main hide-sm">
          <input type="search" placeholder="Search Here" />

          <div className="nav">
            {profile && <Link to="/profile">Profile</Link>}
            <Link to="/leader-board">Leader Board</Link>
            <Link to="/">Resources</Link>
            <span
              className="dropdown pointer"
              onClick={() => {
                if (!profile) {
                  showModal();
                }
              }}
            >
              <img src="./assets/imgs/navbar-account.png" alt="my-account" className="me-2" />
              {profile ? profile.fname : "Login"}
              {profile && (
                <div className="dropdown-content">
                  <div
                    onClick={() => logout(navigate)}
                    className="dropdown-item"
                  >
                    Logout
                  </div>
                </div>
              )}
            </span>
            <Link className="btn btn-gradient" to="/">
              Join Now
            </Link>
          </div>
        </div>

        <div className="show-sm">
          <div
            onClick={toggleSideNav}
            className={clsx("menu btn11", { open: isSideNavActive })}
            data-menu="11"
          >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
          </div>
        </div>

        <div className={clsx("sidenav", { open: isSideNavActive })}>
          <div className="links">
            <Link to="/explore">Explore</Link>
            <Link to="/leader-board">Leader Board</Link>
            <Link to="/">Resources</Link>
            <a onClick={showModal} href="#0">
              <img src="./assets/imgs/navbar-account.png" alt="my-account" />
              Login
            </a>
            <Link className="btn btn-gradient" to="/">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

const mapStatetoProps = (state) => {
  return {
    profile: state.profileReducer.profile,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    logout: function (navigate) {
      dispatch(logout(navigate));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Navbar);
