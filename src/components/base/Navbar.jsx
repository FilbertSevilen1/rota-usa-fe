import React, { useState } from "react";
import "../../css/navbar.css";

import navlogo from "../../assets/logo/rotadarkthin.webp";
import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([
    {
      menuName: "Wheels",
      menuLink: "/wheels",
    },
    {
      menuName: "Gallery",
      menuLink: "/gallery",
    },
    {
      menuName: "About Us",
      menuLink: "/about",
    },
  ]);

  const generateNavbarMenu = () => {
    if (menu) {
      return menu.map((item, index) => {
        console.log(item.menuName, item.menuLink);
        return (
          <NavbarButton
            key={index}
            menuLink={item.menuLink}
            menuName={item.menuName}
          ></NavbarButton>
        );
      });
    }
  };

  return (
    <div className="fixed nav-background w-full h-16 xl:h-20 flex justify-center items-center shadow-md z-50">
      <div className="w-11/12 xl:w-10/12 h-full flex justify-between items-center">
        <button onClick={()=>navigate('/')} className="w-48 xl:w-64 h-full flex items-center transition-all hover:scale-100 active:scale-95">
          <img src={navlogo}></img>
        </button>
        <div className="h-full hidden xl:gap-20 md:flex items-center">
          {generateNavbarMenu()}
        </div>
        <div className="h-full flex md:hidden items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 17h14M5 12h14M5 7h14"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Navbar;