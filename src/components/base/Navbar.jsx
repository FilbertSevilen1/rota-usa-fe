import React, { useEffect, useState } from "react";
import "../../css/navbar.css";

import navlogo from "../../assets/logo/rotadarkthin.webp";
import NavbarButton from "./NavbarButton";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const path = useLocation();

  const navigate = useNavigate();
  const [dropMenu, setDropMenu] = useState(false);
  const [menu, setMenu] = useState([
    {
      menuName: "Wheels",
      menuLink: "/wheels",
    },
    {
      menuName: "About Us",
      menuLink: "/about",
    },
    {
      menuName: "Inventory",
      menuLink: "/inventory",
    },
    {
      menuName: "New Wheels",
      menuLink: "/wheels/34",
    },
  ]);

  const generateNavbarMenu = () => {
    if (menu) {
      return menu.map((item, index) => {
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

  useEffect(() => {
    if (path.pathname.substring(1) == "index2.html") {
      navigate("/");
    }
  });

  return (
    <div className="fixed nav-background w-full h-16 xl:h-20 flex justify-center items-center shadow-md z-50">
      <div className="w-11/12 xl:w-10/12 h-full flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="w-48 xl:w-64 h-full flex items-center transition-all hover:scale-100 active:scale-95"
        >
          <img loading="lazy" src={navlogo}></img>
        </button>
        <div className="h-full hidden md:flex items-center">
          <button
            onClick={() => navigate("/wheels")}
            className="h-full text-center md:text-xl md:min-w-[140px] xl:min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white p-2 md:bg-none"
          >
            Wheels
          </button>
          <button
            onClick={() => navigate("/about")}
            className="h-full text-center md:text-xl md:min-w-[140px] xl:min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white p-2 md:bg-none"
          >
            About Us
          </button>
          <a href="http://rotausa.com/stock.htm">
            <button className="h-full text-center md:text-xl md:min-w-[140px] xl:min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white p-2 md:bg-none">
              Inventory
            </button>
          </a>
          <button
            onClick={() => navigate("/wheels/34")}
            className="h-full text-center md:text-xl md:min-w-[140px] xl:min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white p-2 md:bg-none"
          >
            New Wheels<br></br>
            <p className="text-sm">FF Slipstream 17 x 8.5</p>
          </button>
        </div>
        <div className="h-full flex md:hidden items-center">
          <div onClick={() => setDropMenu(!dropMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 17h14M5 12h14M5 7h14"
              />
            </svg>
          </div>
          {dropMenu ? (
            <div className="rounded-b-xl shadow-md flex flex-col absolute right-0 w-32 bg-neutral-800 top-16 text-xl z-50">
              <NavbarButton
                key={0}
                menuLink={"/wheels"}
                menuName={"Wheels"}
              ></NavbarButton>
              <NavbarButton
                key={1}
                menuLink={"/about"}
                menuName={"About Us"}
              ></NavbarButton>
              <a className="text-center" href="http://rotausa.com/stock.htm">
                <NavbarButton
                  key={2}
                  menuLink={""}
                  menuName={"Inventory"}
                ></NavbarButton>
              </a>
              <button
                onClick={() => navigate("/wheels/34")}
                className="h-full text-center md:text-xl md:min-w-[140px] xl:min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white p-2 md:bg-none"
              >
                New Wheel <br></br><p className="text-sm">FF Slipstream 17 x 8.5</p>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
