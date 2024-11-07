import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsernameContext } from "./UsernameContext";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Navbar() {
  const { username, setUsername } = useContext(UsernameContext);

  const theme = createTheme({
    palette: {
      fire_brick: {
        main: "#ECF007",
        light: "#F6FA0E",
        dark: "#DCE007",
        contrastText: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <h1 className="web_header">NC NEWS</h1>
        <div className="links">
          <Link to="/">
            <Button variant="text" color="fire_brick">
              Home
            </Button>
          </Link>
          <Link to="/articles?page=1&sort_by=created_at&order=desc&topic=">
            <Button variant="text" color="fire_brick">
              Articles
            </Button>
          </Link>
          {!username ? (
            <Link to="/login-signup">
              <Button variant="text" color="fire_brick">
                Login/Signup
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/">
                <Button variant="text" color="fire_brick">
                  Post
                </Button>
              </Link>
              <Button
                variant="text"
                color="fire_brick"
                onClick={() => {
                  setUsername(null);
                  sessionStorage.removeItem("username");
                }}
              >
                Signout
              </Button>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

{
  /* <nav>
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
      </nav> */
}
