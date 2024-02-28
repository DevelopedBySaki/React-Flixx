function Details() {
  return (
    <section className="max-w-[1200] w-full my-0 mx-auto py-0 px-5">
      <div className="back">
        <a
          className="btn"
          href="index.html"
        >
          Back To Movies
        </a>
      </div>
      <div id="movie-details">
        <div className="details-top">
          <div>
            <img
              src="images/no-image.jpg"
              className="card-img-top"
              alt="Movie Title"
            />
          </div>
          <div>
            <h2>Movie Title</h2>
            <p>
              <i className="fas fa-star text-primary"></i>8 / 10
            </p>
            <p className="text-muted">Release Date: XX/XX/XXXX</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque molestiae error debitis provident dolore hic odit, impedit sint, voluptatum consectetur assumenda expedita perferendis obcaecati veritatis voluptatibus. Voluptatum repellat suscipit, quae molestiae cupiditate modi libero dolorem commodi obcaecati! Ratione quia corporis recusandae delectus perspiciatis consequatur ipsam. Cumque omnis ad recusandae.</p>
            <h5>Genres</h5>
            <ul className="list-group">
              <li>Genre 1</li>
              <li>Genre 2</li>
              <li>Genre 3</li>
            </ul>
            <a
              href="#"
              target="_blank"
              className="btn"
            >
              Visit Movie Homepage
            </a>
          </div>
        </div>
        <div className="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li>
              <span className="text-secondary">Budget:</span> $1,000,000
            </li>
            <li>
              <span className="text-secondary">Revenue:</span> $2,000,000
            </li>
            <li>
              <span className="text-secondary">Runtime:</span> 90 minutes
            </li>
            <li>
              <span className="text-secondary">Status:</span> Released
            </li>
          </ul>
          <h4>Production Companies</h4>
          <div className="list-group">Company 1, Company 2, Company 3</div>
        </div>
      </div>
    </section>
  );
}

export default Details;
