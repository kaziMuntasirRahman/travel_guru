import React, { useEffect, useState } from 'react';
import '../../src/style.css';
import { FaArrowRight } from 'react-icons/fa';

const Slide = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('/data/places.json')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  useEffect(() => {
    // Ensure places data is loaded before manipulating DOM
    if (places.length > 0) {
      let nextDom = document.getElementById('next');
      let prevDom = document.getElementById('prev');
      let carouselDom = document.querySelector('.carousel');
      let SliderDom = carouselDom.querySelector('.carousel .list');
      let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (thumbnailItemsDom.length > 0) {
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      }

      let timeRunning = 3000;
      let timeAutoNext = 15000;

      nextDom.onclick = function () {
        showSlider('next');
      };

      prevDom.onclick = function () {
        showSlider('prev');
      };

      let runTimeOut;
      let runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);

      function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
          SliderDom.appendChild(SliderItemsDom[0]);
          thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
          carouselDom.classList.add('next');
        } else {
          SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
          thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
          carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          carouselDom.classList.remove('next');
          carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      }

      return () => {
        clearTimeout(runTimeOut);
        clearTimeout(runNextAuto);
      };
    }
  }, [places]);

  return (
    <div className='overflow-hidden z-0'>
      <div className="carousel">
        <div className="list">
          {places.map((place, index) => (
            <div className="item" key={index}>
              <img src={place.imageLink} alt={place.placeName} />
              <div className="content">
                <div className="author">
                  {place.activities ? place.activities[0].toUpperCase() : 'Unknown Activity'}
                </div>
                <div className="title">{place.placeName ? place.placeName.toUpperCase() : 'Unknown Place'}</div>
                <div className="topic">{place.bestTimeToVisit || 'Best time not available'}</div>
                <div className="des mt-5">
                  {place.description.length>200?place.description.slice(0,250)+"....":place.description}
                  </div>
                <div className="buttons flex items-center gap-5 mt-5">
                  <button
                    className="text-black px-7 py-4 bg-[#f9a51a] flex items-center gap-[10px] ">
                    <p>BOOKING</p>
                    <FaArrowRight />
                  </button>
                  <button className='px-7 py-4 bg-transparent text-white border-[1px] border-white'>SEE MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {places.map((place, index) => (
            <div className="item" key={index}>
              <img src={place.imageLink} alt={`Thumbnail of ${place.placeName}`} />
              <div className="content">
                <div className="title">{place.placeName}</div>
                <div className="description">{place.placeName}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev">{"<"}</button>
          <button id="next">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
