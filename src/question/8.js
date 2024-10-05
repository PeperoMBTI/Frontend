import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function EightPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      P: prevCounts.P + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/9', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      J: prevCounts.J + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/9', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ESTP.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#8. 빼빼로 재료를 사러 마트에 갔는데<br/>참깨스틱이 품절이다.<br/>나의 행동은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            대충 에이스 사다가 빼빼로쿠키나 만들지 뭐.
        </button>
        <button className="answer-button" onClick={second}>
            스틱형 아닌 빼빼로는 빼빼로가 아니다!<br/>동네 마트를 전부 뒤져 참깨스틱을 쟁취한다.
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

export default EightPage;