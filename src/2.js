import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function TwoPage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      N: prevCounts.N + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/3', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      S: prevCounts.S + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/3', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ENFP.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#2. 안 친한 친구가 빼빼로를 줬다. 나의 생각은?</h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            무슨 의미지? 나랑 친해지고 싶은 건가?<br />날 좋아하나?
        </button>
        <button className="answer-button" onClick={second}>
            오, 맛있겠다. 잘 먹을게!
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

export default TwoPage;