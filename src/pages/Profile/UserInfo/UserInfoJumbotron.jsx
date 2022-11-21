import React from "react";
import Section from "../../../components/Section/Section";
import FileBase64 from "react-file-base64";

const UserInfoJumbotron = ({
  userData,
  updateProfilePicture,
  setIsModalActive,
  setProductToEdit,
}) => {
  const { fname, lname, email, phone, picture } = userData;

  return (
    <Section id="user-info-jumbotron">
      <div className="user-info-wrapper">
        <div className="user-img">
          <img
            style={{
              height: "100%",
              objectFit: "cover",
            }}
            src={picture}
            alt="user"
          />
        </div>
        <FileBase64
          multiple={false}
          onDone={(image) => updateProfilePicture({ picture: image.base64 })}
        />

        <div className="username">
          @{fname}_{lname}
        </div>
        <button
          onClick={() => {
            setIsModalActive(true);
            setProductToEdit(null);
          }}
          className="btn btn-primary-inverted"
        >
          Add Product
        </button>
        <div className="bio mt-4">
          <h6>BIO</h6>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="tabs">
        <div className="tab active">Past Drops</div>
      </div>
    </Section>
  );
};

export default UserInfoJumbotron;
