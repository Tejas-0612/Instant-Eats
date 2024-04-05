import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import { navlinks } from "../utils/constants";
import useCheckOnline from "../utils/useCheckOnline";
import { handleScrollTop } from "../utils/Helper";
import FOODLOGO22 from "../images/FOODLOGO22.png";
import MENU_SVG from "../images/Menu.svg";
import CLOSE_SVG from "../images/Close.svg";

const Header = () => {
  const [userinfo, setuserinfo] = useState("login");
  const [isOpen, setIsOpen] = useState(false);
  const onlineStatus = useCheckOnline();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="md:ml-3 w-20 h-20 my-auto">
        <Link to="/">
          <img src={FOODLOGO22} className="p-2" />
        </Link>
      </div>

      <div className="hidden md:block nav-items m-2">
        <ul className="flex font-bold text-base">
          {navlinks.map((nav) => (
            <li
              className="header-li"
              onClick={() => handleScrollTop()}
              key={nav.id}
            >
              <Link to={nav.Link} className="focus:text-primary2">
                {nav.title}
              </Link>
            </li>
          ))}
          <li className="header-li" onClick={() => handleScrollTop()}>
            <Link to="/cart" className="focus:text-primary2">
              Cart-({cartItems?.length})
            </Link>
          </li>
          <li className="header-li">
            {" "}
            <button
              onClick={() => {
                userinfo == "login"
                  ? setuserinfo("logout")
                  : setuserinfo("login");
              }}
              className="focus:text-[#ff6600]"
            >
              {userinfo}
              {onlineStatus ? "🟢" : "🔴"}
            </button>{" "}
          </li>
        </ul>
      </div>

      <div className="block md:hidden pointer">
        <button
          className="absolute top-4 right-2 p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          {!isOpen ? <img src={MENU_SVG} /> : <img src={CLOSE_SVG} />}
        </button>
        <SideBar
          isOpen={isOpen}
          userinfo={userinfo}
          setuserinfo={setuserinfo}
          cartItems={cartItems}
          onlineStatus={onlineStatus}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default Header;
