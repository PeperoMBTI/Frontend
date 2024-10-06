import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function OnePage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.dataCounts) {
      setDataCounts(location.state.dataCounts);
    }
  }, [location.state, setDataCounts]);

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      I: prevCounts.I + 1,
    }));
    navigate('/2', { state: { dataCounts: { ...dataCounts, I: dataCounts.I + 1 } } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      E: prevCounts.E + 1,
    }));
    navigate('/2', { state: { dataCounts: { ...dataCounts, E: dataCounts.E + 1 } } });
  };

  return (
    <div className='container'>
      <div className="pepero-image-container">
        <img src='/pepero/ENFJ.png' alt="결과 이미지" className="pepero-image" />
      </div>
      <h3 className='question'>#1. 주변 사람들에게 나눠줄<br/>빼빼로를 만들기로 했다.<br/>이때 나는?</h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            집에서 혼자 유튜브 영상 따라 만들어야겠다.
        </button>
        <button className="answer-button" onClick={second}>
            친구들 다 모아서 같이 만들면 더 맛있겠지?!
        </button>
      </div>
      <br/><br/><br/>
      {/* <ul>
        {Object.entries(dataCounts).map(([key, count]) => (
          <li key={key}>
            {key}: {count}개
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default OnePage;