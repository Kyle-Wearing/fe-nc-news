import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function LoginSignup() {
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [message, setMessage] = useState("signup");

  function handleClick() {
    setSignUpClicked(!signUpClicked);
    if (!signUpClicked) {
      setMessage("login");
    } else {
      setMessage("signup");
    }
  }

  return (
    <>
      {!signUpClicked ? <LoginForm /> : <SignupForm />}
      <button onClick={handleClick}>Click to {message}</button>
    </>
  );
}
