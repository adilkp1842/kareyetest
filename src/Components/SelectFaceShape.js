import React from "react";
import StyledFaceShape from "../Styles/StyledFaceShape";
import oval from "../assets/faceShape/oval.svg";
import square from "../assets/faceShape/square.svg";
const SelectFaceShape = () => {
  return (
    <StyledFaceShape>
      <div className="top">
        <div className="top_items">
          <img src={oval} />
          <h6>oval</h6>
        </div>
        <div className="top_items">
          <img src={oval} />
          <h6>square</h6>
        </div>
        <div className="top_items">
          <img src={oval} />
          <h6>diamond</h6>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_items">
          <img src={oval} />
          <h6>diamond</h6>
        </div>
        <div className="bottom_items">
          <img src={oval} />
          <h6>diamond</h6>
        </div>
        <div className="bottom_items">
          <img src={oval} />
          <h6>diamond</h6>
        </div>
      </div>
    </StyledFaceShape>
  );
};

export default SelectFaceShape;
