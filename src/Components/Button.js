import React from "react";

const Button = ({ params: { color, text, onClick } }) => {
  return (
    <button onClick={onClick} style={{ color }} className="btn">
      {text}
    </button>
  );
};

export default Button;
