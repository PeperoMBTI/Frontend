import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

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
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    setDataCounts({
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    });
  }, [setDataCounts]);

  const goToNext = () => {
    navigate('/1', { state: { dataCounts } });
  };

  const startAnimation = () => {
    const track = sliderTrackRef.current;
    if (!track) return;

    let position = 0;

    const moveSlider = () => {
      position -= 2;
      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      animationIdRef.current = requestAnimationFrame(moveSlider); // 애니메이션 반복
    };

    moveSlider();

    return () => cancelAnimationFrame(animationIdRef.current); // 애니메이션 중단
  };

  useEffect(() => {
    const fetchDataAndStartAnimation = async () => {
      await getCount();

      if (!loading) {
        startAnimation();
      }
    };

    fetchDataAndStartAnimation();
  }, [loading]);

  const getCount = async () => {
    try {
      const response = await axios.get('https://port-0-peperombti-m31i6oimc9497813.sel4.cloudtype.app/participant', {
        withCredentials: true
    });
      const data = response.data;

      setCount(data.participants);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getCount();
  // }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return (
      <div className="spinner-container">
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

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
        <br/><br/><br/>
      </div>
    </div>
  );
}

export default HomePage;