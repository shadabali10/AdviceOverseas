import React, { useState } from "react";
import { KDItems } from "./KDItems";
import {  Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
// import SubNavigation from "./SubNavigation";
// import KDSUB from "./KDSubDropDown";
// import { KDSub } from "./KDSub";

function KDDropdown() {
  const [click, setClick] = useState(false);
  const [subnav, setSubNav] = useState(false);
  // const [KDSubdropdown, setKDSubDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    }
    // else {
    //   setSubNav(true);
    // }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    }
    // else {
    //   setSubNav(false);
    // }
  };

  // const onKDSubMouseEnter = () => {
  //   if (window.innerWidth < 1000) {
  //     setKDSubDropdown(false);
  //   } else {
  //     setKDSubDropdown(true);
  //   }
  // };
  // const onKDSubMouseLeave = () => {
  //   if (window.innerWidth < 1000) {
  //     setKDSubDropdown(false);
  //   } else {
  //     setKDSubDropdown(false);
  //   }
  // };

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "absolute right-40 z-20 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
            : "absolute right-40 z-20 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
        }
        // className="dropdown-menu"
      >
        {KDItems.map((item, index) => {
          return (
            <>
              <li
                key={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
               <Link
                 className={item.cName}
                 to={item.path}
                 onClick={() => {
                 setClick(false);
                 setSubNav(!subnav);
                  }}
>
                  {item.title}
               </Link>

              </li>

              <hr class="border-gray-200 dark:border-gray-700 " />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default KDDropdown;
