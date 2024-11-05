import { Link } from "react-router-dom";

export function Navbar({ username, setUsername }) {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/articles?p=1"> Articles </Link>
      {!username ? (
        <Link to="/login-signup"> Login/Signup </Link>
      ) : (
        <>
          <Link to="/"> Post </Link>
          <Link
            onClick={() => {
              setUsername(null);
            }}
            to="/"
          >
            {" "}
            Signout{" "}
          </Link>
        </>
      )}
    </nav>
  );
}
