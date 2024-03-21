import "../css/style.css";
import Display from "./Display";
import { Link, Route, Routes } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link
                  className="nav-link"
                  to="/movies.html"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/shows.html"
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/actors.html"
                >
                  Actors
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/movies.html" element={<Display/>}/>
        <Route path="/shows.html" element={<Display/>}/>
        <Route path="/actors.html" element={<Display/>}/>
      </Routes>
    </>
  );
}
