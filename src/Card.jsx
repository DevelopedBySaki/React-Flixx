function Card() {
  return (
    <div className="bg-[#04376b] p-1.5">
      <a href="movie-details.html?id=${movie.id}">
        <img
          src="../images/no-image.jpg"
          className="w-max"
          alt="${movie.title}"
        />
        {/* <img
          src="../images/no-image.jpg"
          className="card-img-top"
          alt="${movie.title}"
        /> */}
      </a>
      <div className="text-xl p-2.5">
        <h5 className="card-title">TItle</h5>
        <p className="card-text">
          <small className="text-muted">Release: 01 Jan 1900</small>
        </p>
      </div>
    </div>
  );
}

export default Card;
