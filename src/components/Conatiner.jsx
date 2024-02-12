export default function Container(props) {
   const { children, classes } = props;
   return (
      <div
         className={`container max-w-[1920px] px-[7.5rem] mt-[60px] mx-auto ${
            classes ? classes : ""
         }`}
      >
         {children}
      </div>
   );
}
