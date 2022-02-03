import React from "react";
import StyledFrameShape from "../Styles/StyledFrameShape";
import glass from "../assets/EyeGlasses/glass1.png";
import square from "../assets/faceShape/square.svg";
const SelectFrameShape = () => {
  return (
    <StyledFrameShape>
      <div className="top">
        <div className="top_items">
          <img src={glass} />
          <h6>oval</h6>
        </div>
        <div className="top_items">
          <img src={glass} />
          <h6>square</h6>
        </div>
        <div className="top_items">
          <img src={glass} />
          <h6>diamond</h6>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_items">
          <img src={glass} />
          <h6>diamond</h6>
        </div>
        <div className="bottom_items">
          <img src={glass} />
          <h6>diamond</h6>
        </div>
        <div className="bottom_items">
          <img src={glass} />
          <h6>diamond</h6>
        </div>
      </div>
    </StyledFrameShape>
  );
};

export default SelectFrameShape;
