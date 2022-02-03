import React from "react";
import StyledNavbar from "../Styles/StyledNavbar";
import Logo from "../assets/Images/Logo.svg";
import arrowicon from "../assets/icons/arrowicon.svg";
import profileicon from "../assets/icons/profileicon.svg";
import wishlisticon from "../assets/icons/wishlisticon.svg";
import trackordericon from "../assets/icons/trackordericon.svg";
import carticon from "../assets/icons/carticon.svg";
import womenIcon from "../assets/icons/womenicon.svg";
import menIcon from "../assets/icons/menicon.svg";
import kidsIcon from "../assets/icons/kids.svg";
import eyeGlassesIcon from "../assets/icons/glasses.svg";
import sunGlassesIcon from "../assets/icons/sunglasses.svg";
import contactLensIcon from "../assets/icons/glasses.svg";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo_image">
        <img src={Logo}></img>
      </div>

      <div className="menu-items">
        <img src={womenIcon} />
        <h6 className="menu_items_title">WOMEN</h6>
      </div>
      <div className="menu-items">
        <img src={menIcon} />
        <h6 className="menu_items_title">MEN</h6>
      </div>
      <div className="menu-items">
        <img src={kidsIcon} />
        <h6 className="menu_items_title">Kids</h6>
      </div>
      <div className="menu-items">
        <img src={eyeGlassesIcon} />
        <h6 className="menu_items_title">Eye Glasess</h6>
      </div>
      <div className="menu-items">
        <img src={sunGlassesIcon} />
        <h6 className="menu_items_title"> Sunglasses</h6>
      </div>
      {/* <div className="menu-items">
        <img src={arrowicon} />
        <h6> Sunglasses</h6>
      </div> */}
      <div className="menu-items">
        <img src={contactLensIcon} />
        <h6 className="menu_items_title"> Contact lens</h6>
      </div>
      <div className="menu-items">
        <input
          className="menu-search"
          type="search"
          placeholder="search products"
        />
        <i class="fas fa-search searchIcon"></i>
      </div>
      <div className="utilities_menu">
        <div className="utilities_item">
          <img src={profileicon} />
          <h6>profile</h6>
        </div>
        <div className="utilities_item">
          <img src={wishlisticon} />
          <h6>Wishlist</h6>
        </div>
        <div className="utilities_item">
          <img src={trackordericon} />
          <h6>Track Order</h6>
        </div>
        <div className="utilities_item">
          <img src={carticon} />
          <h6>Bag</h6>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
