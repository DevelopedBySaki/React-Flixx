export default function NowPlaying() {
    return (
    // This will be a single card component with map loop for now playing movies
    <section className="container">
      <h2>Now Playing</h2>
      {/* <h2>{REACT_APP_API_KEY}</h2> */}
      <div
        id="popular-movies"
        className="grid"
      >
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="card">
          <a href="movie-details.html?id=1">
            <img
              src="../images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}