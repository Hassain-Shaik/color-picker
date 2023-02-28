import React from "react";
import "./ColorComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor, colorSelector } from "./colorSlice";

const ColorComponent = () => {
  const dispatch = useDispatch();
  const colorCode = useSelector(colorSelector);

  const onChangeHandle = (e) => {
    dispatch(changeBgColor(e.target.value));
  };

  return (
    <div
      className="color-component-container"
      style={{ backgroundColor: colorCode }}
    >
      <input className="color-picker" type="color" onChange={onChangeHandle} />
      <div className="color-info-container">
        <h1 className="color-info-heading">
          {" "}
          Background color of your page is : {colorCode}
        </h1>
      </div>
    </div>
  );
};

export default ColorComponent;
