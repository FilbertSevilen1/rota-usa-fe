import React from "react";
import { useNavigate } from "react-router-dom";
function NavbarButton({ menuLink, menuName }) {
  console.log(menuName);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(menuLink)}
      className="h-full text-center md:text-xl min-w-[180px] xl:text-2xl transition-all hover:font-bold active:scale-95 text-white"
    >
      {menuName}
    </button>
  );
}
export default NavbarButton;
