import '../css/style.css';

export default function Search() {
  return (
    <section className='search'>
      <div className='container'>
        <div id='alert'></div>
        <form action='/search.html' className='search-form'>
          <div className='search-radio'>
            <input type='radio' id='movie' name='type' value='movie' defaultChecked />
            {/* React warming  ou provided a `checked` prop to a form field without an `onChange` handler. 
            This will render a read-only field. If the field should be mutable use `defaultChecked`. 
            Otherwise, set either `onChange` or `readOnly`.*/}
            <label htmlFor='movie'>Movies</label>
            <input type='radio' id='show' name='type' value='show' />
            <label htmlFor='show'>TV Shows</label>
            <input type='radio' id='actor' name='type' value='actor' />
            <label htmlFor='actor'>Actors</label>
          </div>
          <div className='search-flex'>
            <input type='text' name='search-term' id='search-term' placeholder='Enter search term' />
            <button className='btn' type='submit'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
