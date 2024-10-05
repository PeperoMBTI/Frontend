import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function SixPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      S: prevCounts.S + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/7', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      N: prevCounts.N + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/7', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ESFP.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#6. 궁극의 빼빼로 레시피에서<br/>녹인 초콜릿에 소금을 30g 넣으라고 한다.<br/>내 생각은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            단짠이 유행이긴 하지. 일단 넣는다.
        </button>
        <button className="answer-button" onClick={second}>
            소금 30g은 너무 많은 거 아니야?<br/>납득이 안되네;;
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

export default SixPage;