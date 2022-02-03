import React from "react";
import StyledHeader from "../Styles/StyledHeader";
import arrowicon from "../assets/icons/arrowicon.svg";
import staricon from "../assets/icons/star-icon.svg";
import uaeflag from "../assets/icons/uaeflag.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="Header">
        <div className="circle">
          <img src={arrowicon} />
        </div>
        <h6>Fast Delivery & Exchanges</h6>
        <div className="circle">
          <img src={staricon} />
        </div>
        <h6>100% Genuine Brands</h6>
        <h6>ةيبرعلا</h6>
        <div className="circle">
          <img className="uaeflag" src={uaeflag} />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
