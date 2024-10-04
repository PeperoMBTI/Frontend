import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function FourPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      J: prevCounts.J + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/5', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      P: prevCounts.P + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/5', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ENTP.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#4. 빼빼로를 만드는 나의 모습은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            이것은 궁극의 레시피다.<br/>단 1g도 차이나지 않도록 하겠어.
        </button>
        <button className="answer-button" onClick={second}>
            빼빼로는 손맛이지~ 내 감을 믿는다.
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

export default FourPage;