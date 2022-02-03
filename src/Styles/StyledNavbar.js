import styled from "styled-components";

const StyledNavbar = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .logo_image {
    width: 100%;
    max-width: 150px;
    height: auto;
  }
  .menu-items {
    display: flex;
    justify-content: space-around;
    min-width: 120px;
    .menu_items_title {
      font-size: 14px;
    }
    .menu-search {
      background-color: #e5e5e5;
      padding: 0.5rem 2rem;
      border-radius: 10px;
      border: none;
      outline: none;
      position: relative;
    }
    .searchIcon {
      position: absolute;
      top: 87px;
      /* right: 1000px; */
      left: 69.5%;
    }

    /* border: 1px solid red; */
  }
  .utilities_menu {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    min-width: 200px;
    .utilities_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      /* border: 1px solid red; */

      img {
        width: 10px;
      }
    }

    h6 {
      font-size: 10px;
      margin-top: 0.5rem;
    }
  }
`;
export default StyledNavbar;
