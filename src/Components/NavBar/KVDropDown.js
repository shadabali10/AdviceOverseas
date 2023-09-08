import React, { useState } from "react";
import { KVItems } from "./KVItems";
import { HashLink as NLink } from "react-router-hash-link";
// import Scroll from "react-scroll";
// import { Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
// import SubNavigation from "./SubNavigation";

function KVDropDown() {
  const [click, setClick] = useState(false);
  // const [subnav, setSubNav] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        // className="dropdown-menu"
      >
        {KVItems.map((item, index) => {
          return (
            <li key={index} className="dropdown-link text-base">
              <NLink
                className={item.cName}
                smooth
                to={item.path}
                onClick={() => setClick(false)}
                // onClick={() => setSubNav(!subnav)}
              >
                {item.title}
              </NLink>
              {/* {item.subNav.map((item, index) => {
                return <SubNavigation key={index} item={item} />
              })} */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default KVDropDown;
