import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addProductApi } from "../redux/product/actions";
import FileBase64 from "react-file-base64";

const ProductForm = ({ hideModal, addProductApi }) => {
  const [productImage, setProductImage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    addProductApi({ ...data, picture: productImage }, hideModal);
  };

  return (
    <form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-12">
        <input
          type="text"
          placeholder="Product Name"
          {...register("name", { required: "required*" })}
        />
        {errors.name && <p role="alert">{errors.name?.message}</p>}
      </div>
      <div className="col-lg-12">
        <input
          type="text"
          placeholder="Description"
          {...register("description", { required: "required*" })}
        />
        {errors.description && (
          <p role="alert">{errors.description?.message}</p>
        )}
      </div>
      <div className="col-lg-6">
        <input
          type="number"
          placeholder="Price"
          {...register("price", {
            required: "required*",
          })}
        />
        {errors.price && <p role="alert">{errors.price?.message}</p>}
      </div>
      <div className="col-lg-6">
        <input
          type="number"
          placeholder="Stock"
          {...register("stock", { required: "required*" })}
        />
        {errors.stock && <p role="alert">{errors.stock?.message}</p>}
      </div>
      <div className="col-lg-12">
        <FileBase64
          multiple={false}
          onDone={(image) => setProductImage(image.base64)}
        />
      </div>
      <button type="submit" className="btn btn-grey mt-4">
        Add Product
      </button>
    </form>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addProductApi: function (data, hideModal) {
      dispatch(addProductApi(data, hideModal));
    },
  };
};

export default connect(null, mapDispatchtoProps)(ProductForm);
