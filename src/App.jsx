import { Route, Routes } from "react-router-dom";
import { Articles } from "./components/articles";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home";
import { useState } from "react";
import { LoginSignup } from "./components/LoginSignup";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <>
      <Navbar username={username} setUsername={setUsername} />
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
      </Routes>
    </>
  );
}

export default App;
