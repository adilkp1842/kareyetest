import React from "react";
import StyledCategoryCard from "../Styles/StyledCategoryCard";
import StyledButton from "../Styles/StyledButton";
import manGlasses from "../assets/Images/man-glasses1.jpg";

const CategoryCard = ({ title }) => {
  return (
    <StyledCategoryCard>
      <div className="card_image">
        <img src={manGlasses} />
      </div>
      <div className="card_title">
        <h1>{title}</h1>
      </div>
      <StyledButton>click me</StyledButton>
    </StyledCategoryCard>
  );
};

export default CategoryCard;
