import React from "react";
import "../style/Button.scss";
import { RootState } from "../store";
import { useSelector } from "react-redux";

interface Props {
  children?: React.ReactNode;
  //onClick: () => void;
}

const Button: React.FC<Props> = ({ children }) => {
  const config = useSelector((state: RootState) => state.config.config);
  return (
    <button
      className="btn"
      style={
        config?.mainColor
          ? { backgroundColor: config.mainColor }
          : { backgroundColor: "#272e71" }
      }
    >
      {children}
    </button>
  );
};

export default Button;
