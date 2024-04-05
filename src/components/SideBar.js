import React from "react";
import { Link } from "react-router-dom";

import { navlinks } from "../utils/constants";
import { handleScrollTop } from "../utils/Helper";

const SideBar = ({
  isOpen,
  userinfo,
  setuserinfo,
  cartItems,
  onlineStatus,
  setIsOpen,
}) => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar ${isOpen ? "translate-x-0" : "translate-x-full"}  ;
  }`}
    >
      <div className="relative py-8 ">
        <ul className="sidebar-ul">
          {navlinks.map((navlink) => {
            return (
              <li
                key={navlink.id}
                className="sidebar-li"
                onClick={() => handleMenu()}
              >
                <Link to={navlink.Link} onClick={() => handleScrollTop()}>
                  {navlink.title}
                </Link>
              </li>
            );
          })}
          <li className="sidebar-li" onClick={() => handleMenu()}>
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>

          <li className="sidebar-li">
            {" "}
            <button
              onClick={() => {
                userinfo == "login"
                  ? setuserinfo("logout")
                  : setuserinfo("login");
              }}
            >
              {userinfo}
              {onlineStatus ? "🟢" : "🔴"}
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
