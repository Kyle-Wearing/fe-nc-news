import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
}
