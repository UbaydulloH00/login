import React from "react";
import { NavLink } from "react-router-dom";

import Grup from "../../image/male.png";

export default function Header() {
   return (
      <div>
         <NavLink
            className="text-[60px] ml-[30rem] hover:text-bgHover hover:cursor-pointer"
            to="/login"
         >
            Welcom to our web site{" "}
         </NavLink>

         <img className="w-full mt-[10rem]" src={Grup} alt="" />
      </div>
   );
}
