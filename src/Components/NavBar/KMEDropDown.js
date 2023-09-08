import React, { useState } from "react";
import { KMEItems } from "./KMEItems";
import { Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
// import SubNavigation from "./SubNavigation";

function KMEDropDown() {
  const [click, setClick] = useState(false);
  const [subnav, setSubNav] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
       <ul
        onClick={handleClick}
        className={
          click
            ? "absolute right z-10 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
            : "absolute right z-10 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
        }
        // className="dropdown-menu"
      >
        {KMEItems.map((item, index) => {
          return (
            <li key={index} className="dropdown-link text-base">
             <Link
        className={item.cName}
        to={item.path}
        onClick={() => {
          handleClick();
          setSubNav(!subnav);
        }}
      >
        {item.title}
      </Link>
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

export default KMEDropDown;
