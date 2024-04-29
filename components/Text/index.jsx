import React from "react";

const sizes = {
  xs: "text-base font-medium",
  s: "text-xl font-light",
  md: "text-[21px] font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-400_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
