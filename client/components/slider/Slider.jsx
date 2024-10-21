import React, { useState } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0); // Start from the first image
  const [isOpen, setIsOpen] = useState(false); // New state for slider visibility

  const changeSlide = (direction) => {
    if (direction === 'left') {
      setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const openSlider = (index) => {
    setImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className='slider'>
      {isOpen && images.length > 0 && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" alt="" className='right' />
          </div>
          <div className="close" onClick={() => setIsOpen(false)}>X</div>
        </div>
      )}
      {images.length > 0 && (
        <div className="bigImage" onClick={() => openSlider(0)}>
          <img src={images[0]} alt="" />
        </div>
      )}
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => openSlider(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
