import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsernameContext } from "./UsernameContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Navbar() {
  const { username, setUsername } = useContext(UsernameContext);

  const navigate = useNavigate();

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
        <Grid container spacing={0.1} className="links">
          <Link to="/">
            <Button
              className="nav_button"
              variant="outlined"
              color="fire_brick"
            >
              <span className="nav_button_text">Home</span>
            </Button>
          </Link>
          <Link to="/articles?page=1&sort_by=created_at&order=desc&topic=">
            <Button
              className="nav_button"
              variant="outlined"
              color="fire_brick"
            >
              <span className="nav_button_text">Articles</span>
            </Button>
          </Link>
          {!username ? (
            <>
              <Link to="/login">
                <Button
                  className="nav_button"
                  variant="outlined"
                  color="fire_brick"
                >
                  <span className="nav_button_text">Login</span>
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  className="nav_button"
                  variant="outlined"
                  color="fire_brick"
                >
                  <span className="nav_button_text">Signup</span>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/post-article">
                <Button
                  className="nav_button"
                  variant="outlined"
                  color="fire_brick"
                >
                  <span className="nav_button_text">Post Article</span>
                </Button>
              </Link>
              <Link>
                <Button
                  className="nav_button"
                  variant="outlined"
                  color="fire_brick"
                  onClick={() => {
                    navigate(0);
                    setUsername(null);
                    sessionStorage.removeItem("username");
                  }}
                >
                  <span className="nav_button_text">Signout</span>
                </Button>
              </Link>
            </>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
