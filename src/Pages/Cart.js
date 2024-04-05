import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import CartInfo from "../components/CartInfo";
import { clearCart } from "../utils/sliceCart";
import { CART_IMG } from "../utils/constants";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export const EMPTYCART = () => {
  return (
    <div className="empty-cart">
      <img src={CART_IMG} />
      <h1>No items to show in the cart</h1>
      <button>
        <Link to="/"> SEE RESTAURANTS NEAR YOU </Link>
      </button>
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems?.items?.reduce(
        (sum, item) =>
          sum + (item[0]?.defaultPrice || item[0]?.price) * item[1],
        0
      )
    );
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePayClick = () => {
    handleClearCart();
    return <EMPTYCART />;
  };

  return (
    <div className="cart">
      {cartItems.items.length == 0 || cartItems.restaurant == null ? (
        <EMPTYCART />
      ) : (
        <div className="min-h-[74vh]">
          <div className="cart-title">
            <h1>Your Cart</h1>
          </div>

          <div className="cart-con">
            <div className="cart-rest">
              {cartItems?.restaurant && (
                <img src={cartItems?.restaurant?.imgUrl} className="w-32" />
              )}
              <div className="w-full">
                <h1>{cartItems?.restaurant?.name}</h1>
                <p>
                  <FaLocationDot />
                  {cartItems?.restaurant?.areaName}
                </p>
                <p>
                  <FaStar />
                  {cartItems?.restaurant?.rating}
                </p>

                <div className="cart-rest-btns">
                  <button onClick={handleClearCart}>Clear Cart</button>
                  <button>
                    <Link to={`/restaurant/${cartItems.restaurant.id}`}>
                      Add More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <hr />

            <div className="cart-info w-full">
              {cartItems?.items?.map((item, idx) => {
                return <CartInfo key={"card-box" + idx} {...item} />;
              })}
            </div>
            <hr />

            <div className="cart-bills">
              <h1>Bill Details</h1>
              <div className="flex-between">
                <p>Item Total</p>
                <p>{"₹" + totalPrice / 100}</p>
              </div>
              <div className="flex-between">
                <p>Delivery Fee</p>
                <p>₹ 0</p>
              </div>
              <div className="flex-between">
                <p>GST and Restaurant Charges</p>
                <p>₹{((totalPrice * 5) / 10000).toFixed(2)}</p>
              </div>
              <hr className=" border-gray-900" />
              <div className="flex-between">
                <p>To Pay </p>
                <p className="font-semibold">
                  ₹{((totalPrice * 105) / 10000).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full my-4">
            <button className="pay-btn" onClick={() => handlePayClick()}>
              PAY NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
