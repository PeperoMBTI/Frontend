import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function ElevenPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      F: prevCounts.F + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/12', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      T: prevCounts.T + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/12', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/INTJ.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#11. 내가 받고 싶은 빼빼로는 어떤 것? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            장장 6시간이 걸려 만든<br/>정성이 가득하지만 종이 맛이 나는 빼빼로
        </button>
        <button className="answer-button" onClick={second}>
            유명 제과점에서 구매한<br/>5만원짜리 빼빼로세트
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

export default ElevenPage;