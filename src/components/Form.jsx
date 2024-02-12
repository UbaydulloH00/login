import React from "react";

export default function input({
   type,
   classes,
   placeholder,
   idInput,
   label,
   labelClass,
   inputRef,
   onChange,
}) {
   return (
      <div className=" flex flex-col  ">
         <label className={labelClass} htmlFor={idInput}>
            {label}
         </label>
         <input
            onChange={onChange}
            ref={inputRef}
            id={idInput}
            type={type}
            className={classes}
            placeholder={placeholder}
         />
      </div>
   );
}
