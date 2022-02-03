import styled from "styled-components";

const StyledFrameShape = styled.div`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-around;
    padding: 2rem;
    text-align: center;

    img {
      width: 100%;
    }
  }
  .bottom {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-around;
    padding: 2rem;
    text-align: center;
    img {
      width: 100%;
    }
  }
`;

export default StyledFrameShape;
