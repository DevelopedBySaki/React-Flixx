import '../css/style.css';
import App from '../src/App';
import Footer from './Footer';
import Header from './Header';
import { Link, Route, Routes } from 'react-router-dom';

export default function Details() {
  return (
    <>
      <Header />
      <section className='container'>
        <div className='back'>
          <Link className='btn' to='/'>
            Back To Movies
          </Link>
        </div>
        <div id='movie-details'></div>
      </section>
      <Routes>
        <Route className='btn' path='/' element={<App />}>
          Back to Movies
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
