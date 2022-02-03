import styled from "styled-components";

const StyledSignup = styled.div`
  /* border: 1px solid red; */
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 2rem;
    border: none;
    border-bottom: 1px solid red;
  }

  .button {
    display: flex;
    justify-content: center;
    button {
      padding: 0 1rem;
    }
  }
`;
export default StyledSignup;
