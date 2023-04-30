import React from "react";
interface Propsbutton {
  button_text: string;
  color?: string;
  onClock_but1: () => void;
}
const Button = ({
  button_text,
  onClock_but1,
  color = "secondary",
}: Propsbutton) => {
  return (
    <button className={"btn btn-" + color} onClick={onClock_but1}>
      {button_text}
    </button>
  );
};

export default Button;
