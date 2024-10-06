import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function NinePage() {
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
    console.log('Current dataCounts:', dataCounts);
    navigate('/10', { state: { dataCounts: { ...dataCounts, I: dataCounts.I + 1 } } });
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      E: prevCounts.E + 1,
    }));
    console.log('Current dataCounts:', dataCounts);
    navigate('/10', { state: { dataCounts: { ...dataCounts, E: dataCounts.E + 1 } } });
  };

  return (
    <div className='container'>
      <div className="pepero-image-container">
        <img src='/pepero/INFJ.png' alt="결과 이미지" className="pepero-image" />
      </div>
      <h3 className='question'>#9. 좋아하는 사람에게 빼빼로를 전달하려고 한다.<br/>나의 행동은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            몰래 스리슬쩍 놓고 간다.
        </button>
        <button className="answer-button" onClick={second}>
            이거 내가 만든거야!<br/>먹어보고 어땠는지 말해줘!
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

export default NinePage;