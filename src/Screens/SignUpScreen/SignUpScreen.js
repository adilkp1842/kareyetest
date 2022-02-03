import React from "react";
import Container from "../../Styles/Container";
import StyledSignup from "../../Styles/StyledSignup/StyledSignup";
import firebaseApp from "../../Firebase/Config";

const SignUpScreen = () => {
  const authentication = firebaseApp.auth();

  console.log(authentication);

  // const auth = getAuth();
  // const mynumber = "+918547234388";
  // const signin = () => {
  //   if (mynumber === "" || mynumber.length < 10) return;

  //   let verify = new firebaseApp.auth.RecaptchaVerifier("recaptcha-container");
  //   auth
  //     .signInWithPhoneNumber(mynumber, verify)
  //     .then((result) => {
  //       setfinal(result);
  //       alert("code sent");
  //       setshow(true);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //       window.location.reload();
  //     });

  return (
    <Container>
      <StyledSignup>
        <form>
          <input type="text" placeholder="name" required />
          <input type="phone" placeholder="telephone" required />
          <input type="text" placeholder="password" required />
          <input type="text" placeholder="confirm password" required />
        </form>
        <div className="button">
          <button onClick={}>login</button>
        </div>
      </StyledSignup>
    </Container>
  );
};

export default SignUpScreen;
