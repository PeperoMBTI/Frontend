import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const { Kakao } = window;

function InfjPage() {

  const navigate = useNavigate();

  const realUrl = "https://peperombti.netlify.app"

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('699159cc7b3764a82f33d2fdcbc68714');
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '빼빼로 MBTI 테스트',
        description: '나는 어떤 빼빼로일까?',
        imageUrl: 'https://github.com/user-attachments/assets/0eba7445-05f4-4e16-ad44-3303387a961f',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  const restart = () => {
    navigate('/');
  };

  const save = () => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      alert('이미지를 길게 눌러 저장하세요.');
      window.open("/result/INFJ.png", '_blank');
    } else {
      const link = document.createElement('a');
      link.href = "/result/INFJ.png";
      link.download = "pepero-mbti-INFJ.png";
      link.click();
    }
  };

  return (
    <div className="image-container">
      <img src="/result/INFJ.png" alt="결과 이미지" className="result-image" />

      <div className='result-button-container'>
        <button className="restart-button" onClick={restart}>
          다시하기
        </button>
        <button className="save-button" onClick={save}>
          결과 저장하기
        </button>
      </div>

      <div className='result-button-container'>
        <button className="share-button" onClick={shareKakao}>
          테스트 공유하기
        </button>
      </div>
    </div>
  )
}

export default InfjPage;