import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsernameContext } from "./UsernameContext";

export function Navbar() {
  const { username, setUsername } = useContext(UsernameContext);
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/articles?page=1&sort_by=created_at&order=desc&topic=">
        {" "}
        Articles{" "}
      </Link>
      {!username ? (
        <Link to="/login-signup"> Login/Signup </Link>
      ) : (
        <>
          <Link to="/"> Post </Link>
          <Link
            onClick={() => {
              setUsername(null);
              sessionStorage.removeItem("username");
            }}
          >
            Signout
          </Link>
        </>
      )}
    </nav>
  );
}
