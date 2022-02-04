import React, { useState } from "react";
import Container from "../../Styles/Container";
import StyledSignup from "../../Styles/StyledSignup/StyledSignup";
import { firebase, auth } from "../../Firebase/Config";

const SignUpScreen = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const signin = () => {
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("recaptchaaaaa");
      },
    });
    auth
      .signInWithPhoneNumber("+919746061842", verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then(async (result) => {
        const token = await auth?.currentUser?.getIdToken(true);
        console.log(token);
        // success
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

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
          <button onClick={signin}>login</button>
        </div>
        <div id="recaptcha-container"></div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button onClick={ValidateOtp}>Verify</button>
        </div>
      </StyledSignup>
    </Container>
  );
};

export default SignUpScreen;
