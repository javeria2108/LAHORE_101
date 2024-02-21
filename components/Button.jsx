//reusable button component with props
import React from "react";
const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && React.cloneElement(icon, { size: 24, color: "currentColor" })}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
