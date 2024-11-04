import { Route, Routes } from "react-router-dom";
import { Articles } from "./components/articles";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
