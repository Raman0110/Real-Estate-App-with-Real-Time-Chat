import React, { useState } from 'react'
import "./searchbar.scss"
import { Link } from 'react-router-dom';

const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState(
    {
      type: "buy",
      location: "",
      minPrice: 0,
      maxPrice: 0,
    }
  )
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }))
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {
          types.map(type => (
            <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>{type}</button>
          ))
        }
      </div>
      <form action="">
        <input type="text" name="location" placeholder='City London' />
        <input type="number" min={0} name="minPrice" placeholder='Min Price' />
        <input type="number" min={0} name="maxPrice" placeholder='Max Price' />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar