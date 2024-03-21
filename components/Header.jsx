import "../css/style.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">FLIXX</a>
        </div>
        <nav>
          <ul>
            <li>
              <a
                className="nav-link"
                href="/"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/shows.html"
              >
                TV Shows
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/actors.html"
              >
                Actors
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
