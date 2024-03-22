import { useEffect, useState } from 'react';

export default function NowPlaying() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return 'Loading ..';
  // todo: add spinner
  if (error) return 'Error!';
  // todo: add error class

  console.log(data.results);

  return (
    <section className='container'>
      <h2>Now Playing</h2>
      <div id='popular-movies' className='grid'>
        <div className='card'>
          <a href='movie-details.html?id=1'>
            <img src='../images/no-image.jpg' className='card-img-top' alt='Movie Title' />
          </a>
          <div className='card-body'>
            <h5 className='card-title'>Movie Title</h5>
            <p className='card-text'>
              <small className='text-muted'>Release: XX/XX/XXXX</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
