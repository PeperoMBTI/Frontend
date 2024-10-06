import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

function TwelvePage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();
  const [result, setResult] = useState('INFP');

  useEffect(() => {
    if (location.state?.dataCounts) {
      setDataCounts(location.state.dataCounts);
    }
  }, [location.state, setDataCounts]);

  const first = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      P: prevCounts.P + 1,
    }));

    if (result === 'ENFJ') {
      navigate('/ENFJ');
    } else if (result === 'ENFP') {
      navigate('/ENFP');
    } else if (result === 'ENTJ') {
      navigate('/ENTJ');
    } else if (result === 'ENTP') {
      navigate('/ENTP');
    } else if (result === 'ESFJ') {
      navigate('/ESFJ');
    } else if (result === 'ESFP') {
      navigate('/ESFP');
    } else if (result === 'ESTJ') {
      navigate('/ESTJ');
    } else if (result === 'ESTP') {
      navigate('/ESTP');
    } else if (result === 'INFJ') {
      navigate('/INFJ');
    } else if (result === 'INFP') {
      navigate('/INFP');
    }else if (result === 'INTJ') {
      navigate('/INTJ');
    } else if (result === 'INTP') {
      navigate('/INTP');
    }else if (result === 'ISFJ') {
      navigate('/ISFJ');
    } else if (result === 'ISFP') {
      navigate('/ISFP');
    } else if (result === 'ISTJ') {
      navigate('/ISTJ');
    }else {
      navigate('/ISTP');
    }
  };
  const second = () => {
    setDataCounts((prevCounts) => ({
      ...prevCounts,
      J: prevCounts.J + 1,
    }));

    navigate('/ENFJ');
  };

  return (
    <div className='container'>
      <div className="pepero-image-container">
        <img src='/pepero/INTP.png' alt="결과 이미지" className="pepero-image" />
      </div>
      <h3 className='question'>#12. 친구들에게 빼빼로를 나눠주려고 한다.<br/>나의 모습은? </h3>
      <div className='button-container'>
        <button className="answer-button" onClick={first}>
            대충 넉넉히 만들어서<br/>필요한 만큼 나눠주면 되지.
        </button>
        <button className="answer-button" onClick={second}>
            누구한테 줄지 리스트를 작성해놓아야지.
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

export default TwelvePage;