import styled from "styled-components";

const StyledFaceShape = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-around;
    padding: 1.5rem;
    text-align: center;
    img {
      width: 100%;
    }
    .top_items {
    }
  }
  .bottom {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-around;
    padding: 1.5rem;
    text-align: center;
    img {
      width: 100%;
    }
  }
`;

export default StyledFaceShape;
