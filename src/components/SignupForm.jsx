import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../api";
import { UsernameContext } from "./UsernameContext";

export function SignupForm() {
  const { setUsername } = useContext(UsernameContext);
  const [inputName, setInputName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputUserName, setInputUserName] = useState("");

  const naviagte = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputName) {
      setIsLoading(true);
      createNewUser(inputUserName, inputName)
        .then((username) => {
          setUsername(username);
          sessionStorage.setItem("username", username);
          setIsError(false);
          setInputName("");
          setIsLoading(false);
          naviagte(-1);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input
            value={inputUserName}
            onChange={(e) => setInputUserName(e.target.value)}
          />
        </label>
        <label>
          name
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <button type="submit">sign up</button>
      </form>
      {isError ? <p>Username already exists</p> : null}
    </>
  );
}
