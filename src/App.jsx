import { Route, Routes } from "react-router-dom";
import { Articles } from "./components/Articles";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { LoginSignup } from "./components/LoginSignup";
import { SingleArticle } from "./components/SingleArticle";
import { UsernameContext } from "./components/UsernameContext";
import { ErrorPage } from "./components/ErrorPage";
import { Header } from "./components/Header";

function App() {
  const [username, setUsername] = useState("user");

  sessionStorage.setItem("username", "user");

  useEffect(() => {
    setUsername(sessionStorage.getItem("username"));
  }, [username]);

  return (
    <>
      <UsernameContext.Provider value={{ username, setUsername }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/login-signup"
            element={
              <LoginSignup username={username} setUsername={setUsername} />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </UsernameContext.Provider>
    </>
  );
}

export default App;
