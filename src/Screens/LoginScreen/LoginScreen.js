import React from "react";
import Container from "../../Styles/Container";
import StyledLogin from "../../Styles/Login/StyledLogin";
import StyledButton from "../../Styles/StyledButton";

const LoginScreen = () => {
  return (
    <Container>
      <StyledLogin>
        <form>
          <input className="" type="phone" placeholder="phoneNumber" required />
          <input className="" type="password" placeholder="password" required />
        </form>
        <div className="button">
          <button>login</button>
        </div>
      </StyledLogin>
    </Container>
  );
};

export default LoginScreen;
