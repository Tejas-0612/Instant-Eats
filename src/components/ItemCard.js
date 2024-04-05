import { useDispatch, useSelector } from "react-redux";
import { MdOutlineStar } from "react-icons/md";

import VEG_SVG from "../images/veg.svg.png";
import NON_VEG_SVG from "../images/non-veg.svg.png";
import { IMG_SMALL_URL } from "../utils/constants";
import { addToCart, decreaseCount, increaseCount } from "../utils/sliceCart";

const ItemCard = ({ items, resCart }) => {
  const dispatch = useDispatch();
  const itemsCart = useSelector((store) => store.cart);

  const addFoodItem = (item) => {
    if (
      itemsCart?.restaurant?.id == undefined ||
      itemsCart?.restaurant?.id == resCart?.id
    ) {
      dispatch(addToCart({ item: [item, 1], resCart }));
    }
  };

  const increaseFoodItem = (i) => {
    dispatch(increaseCount(i));
  };

  const removeFoodItem = (i) => {
    dispatch(decreaseCount(i));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="item-card">
            <div className="w-9/12">
              <div>
                <div className="flex my-2">
                  {item?.card?.info?.itemAttribute?.vegClassifier == "VEG" ? (
                    <img src={VEG_SVG} className="w-6" />
                  ) : (
                    <img src={NON_VEG_SVG} className="w-6" />
                  )}
                  <span className="best-seller">
                    {item?.card?.info?.isBestseller == true && (
                      <p>
                        <MdOutlineStar
                          style={{
                            color: "#FF334B",
                            fontSize: "20px",
                          }}
                        />
                        Best Seller
                      </p>
                    )}
                  </span>
                </div>

                <p className="item-card-title">{item?.card?.info?.name}</p>

                <p className="item-card-price">
                  {" "}
                  ₹ {item?.card?.info?.price / 100}
                </p>
                <p className="item-card-des">{item?.card?.info?.description}</p>
              </div>
            </div>
            <div className="nxt-avl-msg">
              {item?.card?.info?.nextAvailableAtMessage ? (
                <p>{item?.card?.info?.nextAvailableAtMessage}</p>
              ) : (
                <>
                  {item?.card?.info?.imageId && (
                    <img
                      src={IMG_SMALL_URL + item?.card?.info?.imageId}
                      className="item-card-img"
                      alt="card-img"
                    />
                  )}

                  {itemsCart?.items?.filter(
                    (it) => it[0]?.id == item?.card?.info?.id
                  ).length == 0 ? (
                    <button
                      className="item-card-addbtn"
                      id="item-add"
                      onClick={() => {
                        addFoodItem(item?.card?.info);
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <span className="item-card-addbtn1">
                      <button
                        onClick={() => {
                          removeFoodItem(item?.card?.info?.id);
                        }}
                      >
                        &minus;{" "}
                      </button>
                      <span>
                        {
                          itemsCart?.items?.find(
                            (it) => it[0]?.id == item?.card?.info?.id
                          )[1]
                        }
                      </span>
                      <button
                        onClick={() => {
                          increaseFoodItem(item?.card?.info?.id);
                        }}
                        className="z-20"
                      >
                        +
                      </button>
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
