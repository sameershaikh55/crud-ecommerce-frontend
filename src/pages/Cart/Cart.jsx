import React, { useState } from "react";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";

import MainLayout from "../../layouts/MainLayout";

const Cart = () => {
  const [cartState, setCartState] = useState([
    {
      id: "cart-1",
      img: "./assets/imgs/cart-img-1.png",
      title: "Your Title Here",
      desc: "Lorem Ipsum is simply dummy text of the printing",
      code: "WA16Z",
      quantity: 1,
      price: 75,
      deliveryInfo: "Free Shipping",
    },
    {
      id: "cart-2",
      img: "./assets/imgs/cart-img-2.png",
      title: "Your Title Here",
      desc: "Lorem Ipsum is simply dummy text of the printing",
      code: "WA16Z",
      quantity: 1,
      price: 75,
      deliveryInfo: "Free Shipping",
    },
    {
      id: "cart-3",
      img: "./assets/imgs/cart-img-3.png",
      title: "Your Title Here",
      desc: "Lorem Ipsum is simply dummy text of the printing",
      code: "WA16Z",
      quantity: 1,
      price: 75,
      deliveryInfo: "Free Shipping",
    },
    {
      id: "cart-4",
      img: "./assets/imgs/cart-img-4.png",
      title: "Your Title Here",
      desc: "Lorem Ipsum is simply dummy text of the printing",
      code: "WA16Z",
      quantity: 1,
      price: 75,
      deliveryInfo: "Free Shipping",
    },
  ]);

  const changeQuantity = (e, idx, action) => {
    setCartState((prevState) => {
      const newState = [...prevState];

      if (action === "increment") {
        newState[idx].quantity += 1;
      } else {
        if (newState[idx].quantity > 0) newState[idx].quantity -= 1;
      }

      return [...prevState];
    });
  };

  return (
    <MainLayout>
      <HeroSm title="Cart" />

      <Section id="cart">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>DESCRIPTION</th>
                <th>QUANTITY</th>
                <th>UNIT PRICE</th>
                <th>DELIVERY INFO</th>
                <th>SUB TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartState.map((el, idx) => {
                const {
                  id,
                  img,
                  title,
                  desc,
                  code,
                  quantity,
                  price,
                  deliveryInfo,
                } = el;

                return (
                  <tr key={id}>
                    <td>
                      <img src={img} alt={title} />
                    </td>
                    <td>
                      <h6>{title}</h6>
                      <p className="mt-2">{desc}</p>
                      <p className="mt-1">
                        Product code:{" "}
                        <span style={{ color: "#545454" }}>{code}</span>
                      </p>
                    </td>
                    <td>
                      <div className="quantity-container">
                        <button
                          onClick={(e) => changeQuantity(e, idx)}
                          className="btn"
                        >
                          -
                        </button>
                        <input readOnly type="number" value={quantity} />
                        <button
                          onClick={(e) => changeQuantity(e, idx, "increment")}
                          className="btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <h6>${price}</h6>
                    </td>
                    <td>{deliveryInfo}</td>
                    <td>
                      <h6>${+price * quantity}</h6>
                    </td>
                    <td>
                      <img
                        className="bin c-pointer"
                        src="./assets/vectors/bin.svg"
                        alt="bin"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="cart-btns d-flex justify-content-between gap-4">
          <button className="btn btn-dark">CONTINUE SHOPPING</button>
          <div className="d-flex gap-4 flex-sm-row flex-column">
            <button className="btn btn-white">CLEAR CART</button>
            <button className="btn btn-white">CHECKOUT</button>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default Cart;
