import { Route, Routes } from "react-router-dom";
import { Articles } from "./components/Articles";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SingleArticle } from "./components/SingleArticle";
import { UsernameContext } from "./components/UsernameContext";
import { ErrorPage } from "./components/ErrorPage";
import { PostArticle } from "./components/PostArticle";
import { SignupForm } from "./components/SignupForm";

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(sessionStorage.getItem("username"));
  }, [username]);

  return (
    <>
      <UsernameContext.Provider value={{ username, setUsername }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/login"
            element={
              <LoginForm username={username} setUsername={setUsername} />
            }
          />
          <Route
            path="/signup"
            element={
              <SignupForm username={username} setUsername={setUsername} />
            }
          />
          <Route path="/post-article" element={<PostArticle />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </UsernameContext.Provider>
    </>
  );
}

export default App;
