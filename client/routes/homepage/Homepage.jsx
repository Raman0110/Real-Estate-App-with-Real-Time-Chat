import React from 'react';
import "./homepage.scss";
import SearchBar from '../../components/searchbar/SearchBar';

const Homepage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum, velit dicta doloribus eum unde! Dolore vel magni accusantium veritatis omnis non ex quibusdam possimus, necessitatibus fugiat assumenda?</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>

        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" />
      </div>
    </div>
  )
}

export default Homepage