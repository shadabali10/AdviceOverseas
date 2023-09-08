import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Popover } from "@headlessui/react";
import KD from "./KDDropDown";
import KE from "./KEDropDown";
import KME from "./KMEDropDown";
import KV from "./KVDropDown";
import { MenuItems } from "./MenuItems";
import TestDropdown from "./TestDropdown";

function NavLinks({ colorchange }) {
  const [dropdown, setDropdown] = useState(false);
  const [KDdropdown, setKDDropdown] = useState(false);
  const [KEdropdown, setKEDropdown] = useState(false);
  const [KVdropdown, setKVDropdown] = useState(false);
  const [KMEdropdown, setKMEDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onKEMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKEDropdown(false);
    } else {
      setKEDropdown(true);
    }
  };
  const onKEMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKEDropdown(false);
    } else {
      setKEDropdown(false);
    }
  };
  const onKDMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKDDropdown(false);
    } else {
      setKDDropdown(true);
    }
  };
  const onKDMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKDDropdown(false);
    } else {
      setKDDropdown(false);
    }
  };
  const onKVMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKVDropdown(false);
    } else {
      setKVDropdown(true);
    }
  };
  const onKVMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKVDropdown(false);
    } else {
      setKVDropdown(false);
    }
  };
  const onKMEMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKMEDropdown(false);
    } else {
      setKMEDropdown(true);
    }
  };
  const onKMEMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKMEDropdown(false);
    } else {
      setKMEDropdown(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
      <div>
        <NavLink
          exact
          to="/"
          activeClassName=""
          className="navbar-link-hover font-semibold text-2xl"
          activeStyle={{
            fontWeight: "bold",
            color: "#dc2626",
          }}
          onClick={scrollToTop}
        >
          <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
            Home
          </h1>
        </NavLink>
        <ul className="mx-1 md:px-1 py-1 lg:mx-1 hover:text-blue-600 block sm:inline-block navbar-link">
          <li onMouseEnter={onKDMouseEnter} onMouseLeave={onKDMouseLeave}>
            <NavLink
              exact
              to="/kdclasses"
              activeClassName=""
              className="navbar-link-hover font-semibold text-xl"
              activeStyle={{
                fontWeight: "bold",
                color: "#dc2626",
              }}
              onClick={scrollToTop}
            >
              <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
                KatzKabaret
              </h1>
            </NavLink>
            {KDdropdown && <KD />}
            {/* {dropdown && <Dropdown />} */}
            {/* {dropdown && <TestDropdown />} */}
          </li>
        </ul>

        {/* <NavLink
        exact
        to="/solutions"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 py-1 md:px-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Solutions
        </h1>
      </NavLink> */}
        {/* <NavLink
        exact
        to="/services"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "black",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Services
        </h1>
      </NavLink> */}
        <ul className="mx-1 md:px-1 py-1 lg:mx-1 hover:text-blue-600 block sm:inline-block navbar-link">
          <li onMouseEnter={onKEMouseEnter} onMouseLeave={onKEMouseLeave}>
            <NavLink
              exact
              to="/keclasses"
              activeClassName=""
              className="navbar-link-hover font-semibold text-xl"
              activeStyle={{
                fontWeight: "bold",
                color: "#dc2626",
              }}
              onClick={scrollToTop}
            >
              <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
                Katz Avante Garde
              </h1>
            </NavLink>
            {KEdropdown && <KE />}
            {/* {dropdown && <Dropdown />} */}
            {/* {dropdown && <TestDropdown />} */}
          </li>
        </ul>
        {/* <NavLink
        exact
        to="/software"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Software
        </h1>
      </NavLink> */}

        <ul className="mx-1 md:px-1 py-1 lg:mx-1 hover:text-blue-600 block sm:inline-block navbar-link">
          <li onMouseEnter={onKVMouseEnter} onMouseLeave={onKVMouseLeave}>
            <NavLink
              exact
              to="/kv"
              activeClassName=""
              className="navbar-link-hover font-semibold text-xl"
              activeStyle={{
                fontWeight: "bold",
                color: "#dc2626",
              }}
              onClick={scrollToTop}
            >
              <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
                Katz Visual Artistry
              </h1>
            </NavLink>
            {KVdropdown && <KV />}
            {/* {dropdown && <TestDropdown />} */}
            {/* {dropdown &&
            MenuItems.map((item, index) => {
              return <TestDropdown item={item} key={index} />;
            })} */}
          </li>
        </ul>

        <ul className="mx-1 md:px-1 py-1 lg:mx-1 hover:text-blue-600 block sm:inline-block navbar-link">
          <li onMouseEnter={onKMEMouseEnter} onMouseLeave={onKMEMouseLeave}>
            <NavLink
              exact
              to="/kme"
              activeClassName=""
              className="navbar-link-hover font-semibold text-xl"
              activeStyle={{
                fontWeight: "bold",
                color: "#dc2626",
              }}
              onClick={scrollToTop}
            >
              <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
                Katz Music & Entertainers
              </h1>
            </NavLink>
            {KMEdropdown && <KME />}
            {/* {dropdown && <TestDropdown />} */}
            {/* {dropdown &&
            MenuItems.map((item, index) => {
              return <TestDropdown item={item} key={index} />;
            })} */}
          </li>
        </ul>

        {/* <NavLink
        exact
        to="/industries"
        activeClassName=""
        className="navbar-link-hover font-semibold"
        activeStyle={{
          fontWeight: "bold",
          color: "#ffa000",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Industries
        </h1>
      </NavLink> */}

        {/* <NavLink
        exact
        to="/partners"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 py-1 md:px-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Partners
        </h1>
      </NavLink> */}

        {/* <NavLink
        exact
        to="/anti-phishing-solutions"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
          Anti-Phishing
        </h1>
      </NavLink> */}
        <NavLink
          exact
          to="/contact"
          activeClassName=""
          className="navbar-link-hover font-semibold text-xl"
          activeStyle={{
            fontWeight: "bold",
            color: "#dc2626",
          }}
          onClick={scrollToTop}
        >
          <h1 className="mx-2 py-1 md:px-1 lg:mx-2 hover:text-blue-600 block sm:inline-block navbar-link">
            Contact
          </h1>
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinks;
