import React, { useState } from "react";
import { KEItems } from "./KEItems";
import { Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
// import SubNavigation from "./SubNavigation";

function KEDropDown() {
  const [click, setClick] = useState(false);
  // const [subnav, setSubNav] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "absolute right-9 z-20 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
            : "absolute right-9 z-20 w-48 py-2 mt-0 bg-white rounded-md shadow-xl"
        }
        // className="dropdown-menu"
      >
        {KEItems.map((item, index) => {
          return (
            <>
              <li
                key={index}
                className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                  // onClick={() => setSubNav(!subnav)}
                >
                  {item.title}
                </Link>
                {/* {item.subNav.map((item, index) => {
                return <SubNavigation key={index} item={item} />
              })} */}
              </li>
              <hr class="border-gray-200 dark:border-gray-700 " />
            </>
          );
        })}
        {/* <li className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <a
            href="https://drive.google.com/drive/folders/1RhGc24EZKHLGlx8iYZ9tViROBQjK0U_S?usp=sharing"
            className="dropdown-link  font-bold"
            onClick={() => setClick(false)}
            // onClick={() => setSubNav(!subnav)}
          >
            MATERIALS
          </a>
        </li> */}
        <hr class="border-gray-200 dark:border-gray-700 " />
      </ul>
    </>
  );
}

export default KEDropDown;
