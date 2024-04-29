import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
};
const variants = {
  fill: {
    lime_100: "bg-lime-100 text-black-900",
    indigo_800: "bg-indigo-800 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
  },
};
const sizes = {
  xs: "h-[31px] pl-[27px] pr-[18px] text-sm",
  md: "h-[59px] px-[35px] text-base",
  sm: "h-[36px] px-3.5 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["lime_100", "indigo_800", "blue_gray_100"]),
};

export { Button };
