import React, { useRef, useState } from "react";
import FormInput from "./Form";
import Logo from "../../image/logo.png";
import Group from "../../image/male.png";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const navigate = useNavigate();
   const usernameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const [userNameError, setUserNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [registrationMessage, setRegistrationMessage] = useState("");

   function ChangeInputLogin(e) {
      setUserNameError(e.target.value.length <= 0);
   }

   function ChangeInputEmail(e) {
      setEmailError(e.target.value.length <= 0);
   }

   function ChangeInputPassword(e) {
      setPasswordError(e.target.value.length <= 0);
   }

   function validate() {
      const username = usernameRef.current.value.trim();
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value;

      const isUsernameValid = username.length > 1;
      const isEmailValid = email.length > 1;
      const isPasswordValid = password.length > 1;

      setUserNameError(!isUsernameValid);
      setEmailError(!isEmailValid);
      setPasswordError(!isPasswordValid);

      return isUsernameValid && isEmailValid && isPasswordValid;
   }

   async function handleSignupClick() {
      const userName = usernameRef.current.value.trim();
      const passwordRegistr = passwordRef.current.value.trim();
      const emailRegistr = emailRef.current.value.trim();

      const data = {
         username: userName,
         email: emailRegistr,
         password: passwordRegistr,
      };

      if (!validate()) return;

      try {
         const response = await axios.post(
            "https://auth-rg69.onrender.com/api/auth/signup",
            data
         );
        
         console.log("Signup success:", response.data);
         
         usernameRef.current.value = "";
         emailRef.current.value = "";
         passwordRef.current.value = "";

         setRegistrationMessage(
            "Siz muvaffaqiyatli ro'yxatdan o'tdingiz!"
         );
         alert("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
         navigate("/");
      } catch (error) {
         console.error("Signup error:", error);
         if (error.response && error.response.status === 409) {
            setRegistrationMessage(
               "Bu foydalanuvchi allaqachon ro'yxatdan o'tgan!"
            );
         } else {
            setRegistrationMessage(
               "Ro'yxatdan o'tish vaqtida xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
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
                  Maydonlarni toldiring va bizning web saitimizda
                  shahsiy kabintenigizni yarating
               </p>
            </section>
            <div>
               <FormInput
                  onChange={ChangeInputLogin}
                  inputRef={usernameRef}
                  type="text"
                  placeholder="Enter User name"
                  label="Username"
                  labelClass="mt-[70px] mb-[0.3rem] text-[18px] font-medium"
                  classes="bg-bgPrimary px-8 py-5 text-[18px]   outline-none rounded-lg"
               />
               {userNameError && (
                  <span className="text-red-500">
                     Please enter User Name
                  </span>
               )}
               <FormInput
                  onChange={ChangeInputEmail}
                  inputRef={emailRef}
                  type="email"
                  placeholder="Enter User Email"
                  label="Email"
                  labelClass="mt-[20px] mb-[0.3rem] text-[18px] font-medium"
                  classes="bg-bgPrimary px-8 py-5 text-[18px]   outline-none rounded-lg"
               />
               {emailError && (
                  <span className="text-red-500">
                     Please enter Email
                  </span>
               )}
               <FormInput
                  onChange={ChangeInputPassword}
                  inputRef={passwordRef}
                  type="password"
                  placeholder="Parolingizni kiriting"
                  label="Password"
                  labelClass="mt-[20px] mb-[0.3rem] text-[18px] font-medium"
                  classes="bg-bgPrimary px-8 py-5 text-[18px]   outline-none rounded-lg"
               />
               {passwordError && (
                  <span className="text-red-500">
                     Please enter Password
                  </span>
               )}
               <Button
                  onClick={handleSignupClick}
                  classes="bg-bgButton text-white w-full mt-6 py-4 rounded-lg hover:bg-bgHover"
               >
                  Signup
               </Button>
               {registrationMessage && (
                  <span className="text-red-500">
                     {registrationMessage}
                  </span>
               )}
            </div>
         </div>
         <div>
            <img className="w-[1019.75px" src={Group} alt="" />
         </div>
      </div>
   );
}
