import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../api";
import { UsernameContext } from "./UsernameContext";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export function SignupForm() {
  const { setUsername } = useContext(UsernameContext);
  const [inputName, setInputName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputUserName, setInputUserName] = useState("");

  const navigate = useNavigate();

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
          navigate(-1);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }

  return (
    <>
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <label>
            <TextField
              className="login_box"
              error={isError}
              label={"ENTER USERNAME"}
              id="outlined-error-helper-text"
              helperText={isError ? "username already exists" : null}
              value={inputUserName}
              onChange={(e) => {
                setInputUserName(e.target.value);
                setIsError(false);
              }}
            />
          </label>
          <label>
            <TextField
              className="login_box"
              label={"ENTER NAME"}
              id="outlined"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                setIsError(false);
              }}
            />
          </label>
          <div className="submit_button">
            <Button type="submit" variant="outlined">
              {isLoading ? <CircularProgress /> : "Sign Up"}
            </Button>
          </div>
        </form>
        <div className="move_down">
          <h4 onClick={() => navigate("/login")}>Already have an account?</h4>
          <Button
            variant="contained"
            className="swap_button"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
