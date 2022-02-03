import React from "react";
import StyledBrandCard from "../Styles/StyledBrandCard";
import rayban from "../assets/brandlogos/rayban.svg";
const BrandCard = () => {
  return (
    <StyledBrandCard>
      <img src={rayban} />
    </StyledBrandCard>
  );
};

export default BrandCard;
