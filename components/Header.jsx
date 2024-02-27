export default function Header() {
  return (
    <header className="bg-black/80 py-5 px-0">
      <div className="flex justify-between items-center max-w-[1200px] w-full py-0 px-5 my-0 mx-auto">
        <div className="text-white text-2xl font-bold uppercase">
          <a href="/">Flix</a>
        </div>
        <nav>
          <ul className="flex">
            <li className="ml-5">
              <a
                href="/"
                className="text-base hover:text-secondary"
              >
                Movies
              </a>
            </li>
            <li className="ml-5">
              <a
                href="/shows.html"
                className="text-base hover:text-secondary"
              >
                TV Shows
              </a>
            </li>
            <li className="ml-5">
              <a
                href="/actors.html"
                className="text-base hover:text-secondary"
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
