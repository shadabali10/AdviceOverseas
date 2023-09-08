import React, { useState } from "react";
import { KDItems } from "./KDItems";
import { Link } from "react-router-dom";
// import KDSUB from "./KDSubDropDown";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
// import SubNavigation from "./SubNavigation";

function KDSubDropdown() {
  const [click, setClick] = useState(false);
  const [subnav, setSubNav] = useState(false);
  const handleClick = () => setClick(!click);
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    }
    else {
      setSubNav(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    }
    else {
      setSubNav(false);
    }
  };

  return (
    <>
      {KDItems.map((item, index) => {
        return (
          <>
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


            <hr class="border-gray-200 dark:border-gray-700 " />
          </>
        );
      })}
    </>
  );
}

export default KDSubDropdown;
