import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../api";

export function LoginForm({ setUsername }) {
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
          setIsError(false);
          setInput("");
          setIsLoading(false);
          navigate("/");
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
          enter username
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <button type="submit">log in</button>
      </form>
      {isError ? <p>Username does not exist</p> : null}
    </>
  );
}
