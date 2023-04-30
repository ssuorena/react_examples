import React from "react";
interface Props2 {
  text: string;
  onClose: () => void;
}
const Alert = ({ text, onClose }: Props2) => {
  return (
    <div>
      {text}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
