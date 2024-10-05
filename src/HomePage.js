import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

const images = [
  '/pepero/ENFJ.png',
  '/pepero/ENFP.png',
  '/pepero/ENTJ.png',
  '/pepero/ENTP.png',
  '/pepero/ESFJ.png',
  '/pepero/ESFP.png',
  '/pepero/ESTJ.png',
  '/pepero/ESTP.png',
  '/pepero/INFJ.png',
  '/pepero/INFP.png',
  '/pepero/INTJ.png',
  '/pepero/INTP.png',
  '/pepero/ISFJ.png',
  '/pepero/ISFP.png',
  '/pepero/ISTJ.png',
  '/pepero/ISTP.png',
];

function HomePage() {
  const sliderTrackRef = useRef(null);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { dataCounts } = useContext(DataContext);

  const goToNext = () => {
    navigate('/1', { state: { dataCounts } });
  };

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    let position = 0;

    const moveSlider = () => {
      position -= 2;
      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(moveSlider);
    };

    moveSlider();

    return () => cancelAnimationFrame(moveSlider);
  }, []);

  return (
    <div className="App">
      <br/>
      <div className="title">
        <h2>나는 어떤 유형의 빼빼로일까?</h2>
        <br /><br/>
        <div className="slider">
          <div className="slider-track" ref={sliderTrackRef}>
            {images.concat(images).map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`slide-${index}`} />
              </div>
            ))}
          </div>
        </div>
        <br />
        <h3>지금까지 {count}명이 참여했습니다.</h3>
        <br/>
        <button className="start-button" onClick={goToNext}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default HomePage;