import "../css/style.css";

export default function Details() {
  return (
    <section className="container">
      <div className="back">
        <a
          className="btn"
          href="index.html"
        >
          Back To Movies
        </a>
      </div>
      <div id="movie-details"></div>
    </section>
  );
}
