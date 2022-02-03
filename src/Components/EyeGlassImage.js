import React from "react";
import StyledGlassImage from "../Styles/StyledGlassImage";
import glass1 from "../assets/EyeGlasses/glass1.png";
function EyeGlassImage() {
  return (
    <StyledGlassImage>
      <div className="eyeImage">
        <img src={glass1} />
        <h3 className="para">lorem</h3>
      </div>
    </StyledGlassImage>
  );
}

export default EyeGlassImage;
