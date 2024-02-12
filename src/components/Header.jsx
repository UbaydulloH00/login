import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../image/logo.png";

export default function Header() {
   const location = useLocation();
   return (
      <div className="flex items-center gap-10 text-[60px] ml-[30rem]">
         <NavLink className="ml-[-50px]" to="/">
            <img src={Logo} alt="" />
         </NavLink>
         <NavLink
            className={`pb-[1.1rem] ${
               location.pathname === "/"
                  ? "  border-solid border-b-4 border-b-blue-600 text-blue-700"
                  : "border-b-white text-black"
            }`}
            to="/"
         >
            Home
         </NavLink>
         <NavLink
            className={`pb-[1.1rem] ${
               location.pathname === "/login"
                  ? "  border-solid border-b-4 border-b-blue-600 text-blue-700"
                  : "border-b-white text-black"
            }`}
            to="/login"
         >
            Login
         </NavLink>
         <NavLink
            className={`pb-[1.1rem] ${
               location.pathname === "/registr"
                  ? "  border-solid border-b-4 border-b-blue-600 text-blue-700"
                  : "border-b-white text-black"
            }`}
            to="/registr"
         >
            Registr
         </NavLink>
      </div>
   );
}
