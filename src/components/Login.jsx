import React, { useRef, useState } from "react";
import axios from "axios";
import FormInput from "./Form";
import Logo from "../../image/logo.png";
import Group from "../../image/male.png";
import Button from "./Button";

export default function Login() {
   const loginRef = useRef();
   const passwordRef = useRef();
   const [loginError, setLoginError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [registrationError, setRegistrationError] = useState("");

   function ChangeInputLogin(e) {
      setLoginError(e.target.value.length <= 1);
   }

   function ChangeInputPassword(e) {
      setPasswordError(e.target.value.length <= 1);
   }

   async function validate() {
      setLoginError(!loginRef.current.value);
      setPasswordError(!passwordRef.current.value);

      if (!loginError && !passwordError) {
         try {
            const response = await axios.post(
               "https://auth-rg69.onrender.com/api/auth/signin",
               {
                  username: loginRef.current.value,
                  password: passwordRef.current.value,
               }
            );
            console.log(
               "User signed in successfully:",
               response.data
            );
           
            setRegistrationError("");
         } catch (error) {
            console.error("Login failed:", error);
            
            setRegistrationError(
               "Siz ro'yxatdan o'tmagan bo'lishingiz mumkin"
            );
         }
      }
   }

   return (
      <div className="mt-[60px] flex justify-between">
         <div>
            <img
               className="ml-[11rem] mt-[100px] w-[125px]"
               src={Logo}
               alt=""
            />
            <section className="text-center">
               <h1 className="text-[60px] mt-[90px] font-bold">
                  Xush kelibsiz!
               </h1>
               <p className="text-[20px] font-normal">
                  Login parolingizni kiritib shahsiy kabinetingizga
                  kiring
               </p>
            </section>
            <div>
               <FormInput
                  onChange={ChangeInputLogin}
                  inputRef={loginRef}
                  type="text"
                  placeholder="Loginingizni kiriting"
                  label="Login"
                  labelClass="mt-[70px] mb-[0.3rem] text-[18px] font-medium"
                  classes="bg-bgPrimary px-8 py-5 text-[18px]   outline-none rounded-lg"
               />
               {loginError ? (
                  <span className="text-red-500">
                     Iltimos, loginni kiriting
                  </span>
               ) : (
                  ""
               )}
               <FormInput
                  onChange={ChangeInputPassword}
                  inputRef={passwordRef}
                  type="password"
                  placeholder="Parolingizni kiriting"
                  label="Parol"
                  labelClass="mt-[20px] mb-[0.3rem] text-[18px] font-medium"
                  classes="bg-bgPrimary px-8 py-5 text-[18px]   outline-none rounded-lg"
               />
               {passwordError ? (
                  <span className="text-red-500">
                     Iltimos, parolni kiriting
                  </span>
               ) : (
                  ""
               )}
               {registrationError && (
                  <span className="text-red-500">
                     {registrationError}
                  </span>
               )}
               <Button
                  onClick={validate}
                  classes="bg-bgButton text-white w-full mt-6 py-4 rounded-lg hover:bg-bgHover"
               >
                  Kirish
               </Button>
            </div>
         </div>
         <div>
            <img className="w-[1019.75px" src={Group} alt="" />
         </div>
      </div>
   );
}
