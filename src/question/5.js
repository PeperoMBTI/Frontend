import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function FivePage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      E: prevCounts.E + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/6', { state: { dataCounts } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      I: prevCounts.I + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/6', { state: { dataCounts } });
  };

  return (
    <div className='container'>
      <img src='/pepero/ESFJ.png' style={{width: '70px', height: 'auto'}}/>
      <br/>
      <h3 className='question'>#5. 학교에서 처음 보는 친구가<br/>빼빼로데이라며 수제 빼빼로를 준다.<br/>나의 반응은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            와 고마워!!! 내 빼빼로도 나눠줄게!<br/>빼빼로를 교환하고 스몰토크를 이어간다. 
        </button>
        <button className="answer-button" onClick={second}>
            ㅇ어..고마워...!<br/>고맙다고 말하지만 조금 부담스럽다.
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

export default FivePage;