import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function ThreePage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      F: prevCounts.F + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/4', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      T: prevCounts.T + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/4', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ENTJ.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#3. 내가 만든 빼빼로를 먹은 친구가 말했다.<br/>'이거 진짜 맛있는데 템퍼링이 잘못된 것 같아. 초콜릿이 너무 쉽게 녹는군.'<br/>이때 나의 반응은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            뭐야. 정성껏 준비했는데 서운하게....
        </button>
        <button className="answer-button" onClick={second}>
            내년엔 템퍼링 솜씨 한번 발휘해봐야겠군.
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

export default ThreePage;