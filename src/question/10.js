import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function TenPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      S: prevCounts.S + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/11', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      N: prevCounts.N + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/11', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/INFP.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#10. 빼빼로를 만들 때 나의 스타일은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            주어진 재료로 주어진 레시피를 따라 만든다.
        </button>
        <button className="answer-button" onClick={second}>
            주어진 재료로 자유롭게 만든다.
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

export default TenPage;