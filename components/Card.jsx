function Card() {
  return (
    <section className="max-w-[1200] w-full my-0 mx-auto py-0 px-5">
      <h2>Popular Movies</h2>
      <div
        id="popular-movies"
        // added to default tailwind
        className="grid grid-cols-250px gap-5"
      >
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              <small className="text-muted">Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
        <div className="bg-[#04376b] p-[5px] hover:scale-105 hover:transition-all duration-500 ease-in-out hover:bg-[#0a4b8f]">
          <a href="movie-details.html?id=1">
            <img
              src="images/no-image.jpg"
              className="w-full"
              alt="Movie Title"
            />
          </a>
          <div className="text-xl p-2.5">
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

export default Card;
