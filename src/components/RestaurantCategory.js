import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({
  data,
  setShowData,
  showData,
  resCart,
  title,
}) => {
  const handleClick = () => {
    setShowData();
  };

  return data.itemCards ? (
    <div className="res-menu-category">
      <div className="flex-between pointer" onClick={handleClick}>
        <span className="text-lg md:text-xl font-bold">
          {title} ({data.itemCards?.length})
        </span>
        <span>{showData ? <FaArrowDown /> : <FaArrowUp />}</span>
      </div>

      {data.itemCards && showData && (
        <ItemCard items={data?.itemCards} resCart={resCart} />
      )}
    </div>
  ) : null;
};
export default RestaurantCategory;
