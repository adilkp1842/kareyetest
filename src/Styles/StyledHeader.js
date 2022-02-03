import styled from "styled-components";

const StyledHeader = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #f1f1f1;
  padding: 0.5rem 0;
  .Header {
    display: flex;
    /* border: 1px solid black; */
    width: 500px;
    justify-content: space-evenly;
    align-items: center;
    h6 {
      font-size: 10px;
    }
    .circle {
      /* border: 1px solid red; */
      margin-bottom: 0.2rem;
      .uaeflag {
      }
      img {
        /* border: 2px solid red; */
      }
    }
  }
`;

export default StyledHeader;
