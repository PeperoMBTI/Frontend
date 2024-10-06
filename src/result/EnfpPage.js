import React from "react";
import { useNavigate } from 'react-router-dom';

function EnfpPage() {

  const navigate = useNavigate();

  const restart = () => {
    navigate('/');
  };

  const save = () => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      alert('이미지를 길게 눌러 저장하세요.');
      window.open("/result/ENFP.png", '_blank');
    } else {
      const link = document.createElement('a');
      link.href = "/result/ENFP.png";
      link.download = "pepero-mbti-ENFP.png";
      link.click();
    }
  };

  return (
    <div className="image-container">
      <img src="/result/ENFP.png" alt="결과 이미지" className="result-image" />

      <div className='result-button-container'>
        <button className="restart-button" onClick={restart}>
          다시하기
        </button>
        <button className="save-button" onClick={save}>
          결과 저장하기
        </button>
      </div>
    </div>
  )
}

export default EnfpPage;