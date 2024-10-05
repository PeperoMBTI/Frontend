import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function SevenPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      F: prevCounts.F + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/8', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      T: prevCounts.T + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/8', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ESTJ.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#7. 친구가 빼빼로를 받고<br/>감동의 눈물을 흘리며 고마워한다.<br/>나의 반응은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            이렇게 기뻐해주다니!! 너무 좋다!!!
        </button>
        <button className="answer-button" onClick={second}>
            그렇게까지 감동받을 일이라고...?
        </button>
      </div>

      <ul>
        {Object.entries(dataCounts).map(([key, count]) => (
          <li key={key}>
            {key}: {count}개
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SevenPage;