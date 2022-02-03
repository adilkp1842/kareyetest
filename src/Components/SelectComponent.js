import React, { useState } from "react";
import StyledFaceShape from "../Styles/StyledSelectComponent";
import menmodal from "../assets/modalImages/men1.png";
import oval from "../assets/faceShape/oval.svg";
import SelectFaceShape from "./SelectFaceShape";
import SelectFrameShape from "./SelectFrameShape";
import SelectColor from "./SelectColor";
const SelectComponent = () => {
  const [state, setState] = useState("faceshape");

  return (
    <StyledFaceShape>
      <div className="title_desc">
        <h5>shop by</h5>
        <div className="face_text">
          <h6 onClick={() => setState("faceshape")}>FACE SHAPE</h6>
          <div className="vl"></div>
          <h6 onClick={() => setState("frameshape")}>FRAME SHAPE</h6>
          <div className="vl"></div>
          <h6 onClick={() => setState("color")}>COLOR</h6>
        </div>
        <div className="select_components">
          {state === "faceshape" ? (
            <SelectFaceShape />
          ) : state === "frameshape" ? (
            <SelectFrameShape />
          ) : state === "color" ? (
            <SelectColor />
          ) : null}
        </div>
      </div>

      <div className="modal_image">
        <img src={menmodal} />
      </div>
    </StyledFaceShape>
  );
};

export default SelectComponent;
