import React from "react";

const Button = ({ text, onClick, color, width, size, height, radius, bgColor }) => {
  return (
    <button
      type="button"
      style={{
        color: color,
        width: width,
        height: height,
        borderRadius: radius,
        backgroundColor:bgColor,
        fontSize:size
      }}
      onClick={onClick}
    >
      {text}
      <ion-icon name="arrow-forward-sharp"></ion-icon>
    </button>
  );
};

export default Button;
