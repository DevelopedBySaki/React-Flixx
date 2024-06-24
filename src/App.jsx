import Home from "../components/Home";
import Header from "../components/Header";
import Movies from "../components/Movies";
import TVShows from "../components/TVShows";
import Actors from "../components/Actors";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<TVShows />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
