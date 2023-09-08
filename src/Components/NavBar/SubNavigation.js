import React, { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";
import "./navbarstyle.css";

const SubNavigation = ({ item }) => {
  return (
    <ul className="block">
      <li className="flex overflow-auto items-center px-3 py-1 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <Link to={item.path}>{item.title}</Link>
      </li>
    </ul>
  );
};

export default SubNavigation;
