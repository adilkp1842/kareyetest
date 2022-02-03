import React from "react";
import BrandCard from "../Components/BrandCard";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Container from "../Styles/Container";
import CategoryCard from "../Components/CategoryCard";
import SaleBanner from "../Components/SaleBanner";
import EyeWearText from "../Components/EyeWearText";
import EyeGlassImage from "../Components/EyeGlassImage";
import SelectComponent from "../Components/SelectComponent";
import TransitionCard from "../Components/TransitionCard";
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      {/* <Carousel /> */}

      <Container>
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </Container>

      <Container>
        <CategoryCard title={"Women’s Glasses"} />
        <CategoryCard title={"Kid’s Glasses"} />
        <CategoryCard title={"Men’s Glasses"} />
      </Container>

      <SaleBanner />
      <Container>
        <EyeWearText />
      </Container>
      <Container>
        <EyeGlassImage />
        <EyeGlassImage />
        <EyeGlassImage />
        <EyeGlassImage />
        <EyeGlassImage />
      </Container>
      <Container>
        <SelectComponent />
      </Container>
      <Container>
        <TransitionCard />
      </Container>
    </>
  );
};

export default Home;
