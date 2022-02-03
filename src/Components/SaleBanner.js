import React from "react";
import BannerImage from "../assets/saleBanner/saleBanner.png";
import StyledBanner from "../Styles/StyledBanner";
const SaleBanner = () => {
  return (
    <StyledBanner>
      <div style={{ width: "100%" }} className="Sale_Banner">
        <img src={BannerImage} />
      </div>
    </StyledBanner>
  );
};

export default SaleBanner;
