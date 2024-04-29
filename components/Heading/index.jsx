import React from "react";

const sizes = {
  xl: "text-[34px] font-bold md:text-[32px] sm:text-3xl",
  s: "text-lg font-bold",
  md: "text-[22px] font-bold",
  xs: "text-base font-bold",
  lg: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
