import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GridContainer from "../../components/GridContainer/GridContainer";
import Section from "../../components/Section/Section";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { profileApi, updateProfilePicture } from "../../redux/profile/actions";
import UserInfoJumbotron from "./UserInfo/UserInfoJumbotron";
import Modal from "../../Modals/AuthModal";
import { userProductsApi } from "../../redux/product/actions";

const Profile = ({
  profile,
  profileApi,
  updateProfilePicture,
  userProducts,
  userProductsApi,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    profileApi(navigate);
    userProductsApi();
  }, []);

  if (!profile) {
    return <div></div>;
  }

  return (
    <MainLayout>
      <Modal
        isModalActive={isModalActive}
        hideModal={() => {
          setIsModalActive(false);
        }}
        productFormModal
      />

      <UserInfoJumbotron
        userData={profile}
        updateProfilePicture={updateProfilePicture}
        setIsModalActive={setIsModalActive}
      />

      {(userProducts === "" ? (
        <h5 className="text-center py-5">loading...</h5>
      ) : (
        !userProducts.length && (
          <h5 className="text-center py-5">No Product Found</h5>
        )
      )) || (
        <>
          <Section id="single-drop">
            <GridContainer rowClassName="gy-4">
              <div className="col-lg-5 d-flex align-items-center">
                <img
                  className="d-block w-100"
                  src={
                    (activeProduct === null && userProducts[0].picture) ||
                    activeProduct.picture
                  }
                  alt="release-item"
                />
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="text">
                  <h2>
                    {(activeProduct === null && userProducts[0].name) ||
                      activeProduct.name}
                  </h2>

                  <p className="mt-4">
                    {(activeProduct === null && userProducts[0].description) ||
                      activeProduct.description}
                  </p>

                  <div className="drop-info mt-4">
                    {/* <div>Dropped Thursday 8/12 1am</div> */}
                    <div>
                      EDITIONS :{" "}
                      {(activeProduct === null && userProducts[0].price) ||
                        activeProduct.price}
                    </div>
                    <div>
                      Stock :{" "}
                      {(activeProduct === null && userProducts[0].stock) ||
                        activeProduct.stock}
                    </div>
                    {/* <div className="d-inline-flex align-items-center">
                      DETAILS
                      <button className="btn btn-gradient ms-3">
                        <img src="./assets/vectors/dots.svg" alt="dots" />
                      </button>
                    </div> */}
                  </div>

                  {/* <div className="btns mt-5">
                    <button className="btn btn-grey">Drop Ended</button>
                    <button
                      style={{ marginTop: 18 }}
                      className="btn btn-light-grey"
                    >
                      View Editons
                    </button>
                  </div> */}
                </div>
              </div>
            </GridContainer>
          </Section>

          <Section id="past-drops">
            <GridContainer rowClassName="gy-4">
              {userProducts.map((el) => {
                const { _id, picture, name } = el;

                if (activeProduct && activeProduct.name === name) {
                  return;
                }

                return (
                  <div className="col-md-4 col-sm-6" key={_id}>
                    <img
                      onClick={() => setActiveProduct(el)}
                      className="pointer"
                      src={picture}
                      alt="drop"
                      title={name}
                    />
                  </div>
                );
              })}
            </GridContainer>
          </Section>
        </>
      )}
    </MainLayout>
  );
};

const mapStatetoProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    userProducts: state.productReducer.userProducts,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    profileApi: function (navigate) {
      dispatch(profileApi(navigate));
    },
    updateProfilePicture: function (data) {
      dispatch(updateProfilePicture(data));
    },
    userProductsApi: function () {
      dispatch(userProductsApi());
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
