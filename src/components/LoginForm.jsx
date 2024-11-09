import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../api";
import { UsernameContext } from "./UsernameContext";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export function LoginForm() {
  const { setUsername } = useContext(UsernameContext);
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      setIsLoading(true);
      getUserByUsername(input)
        .then((username) => {
          setUsername(username);
          sessionStorage.setItem("username", username);
          setIsError(false);
          setInput("");
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
              helperText={isError ? "username does not exist" : null}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsError(false);
              }}
            />
          </label>
          <div className="submit_button">
            <Button type="submit" variant="outlined">
              {isLoading ? <CircularProgress /> : "log in"}
            </Button>
          </div>
        </form>
        <div className="move_down">
          <h4 onClick={() => navigate("/signup")}>Dont have an account?</h4>
          <Button
            variant="contained"
            className="swap_button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
