import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function OnePage() {
  const location = useLocation();
  const { dataCounts, setDataCounts } = useContext(DataContext);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const images = [
    '/pepero/ENFJ.png',
    '/pepero/ENFP.png',
    '/pepero/ENTJ.png',
    '/pepero/ENTP.png',
    '/pepero/ESFJ.png',
    '/pepero/ESFP.png',
    '/pepero/ESTJ.png',
    '/pepero/ESTP.png',
    '/pepero/INFJ.png',
    '/pepero/INFP.png',
    '/pepero/INTJ.png',
    '/pepero/INTP.png',
  ];

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/question');
      const data = response.data;

      setQuestions(data.question);
      setOptions1(data.option1);
      setOptions2(data.option2);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getResult = async () => {
    try {
      console.log(dataCounts.E);
      console.log(dataCounts.I);
      console.log(dataCounts.S);
      console.log(dataCounts.N);
      console.log(dataCounts.T);
      console.log(dataCounts.F);
      console.log(dataCounts.J);
      console.log(dataCounts.P);
      const response = await axios.post('http://localhost:8080/result', {
        e: dataCounts.E,
        i: dataCounts.I,
        s: dataCounts.S,
        n: dataCounts.N,
        t: dataCounts.T,
        f: dataCounts.F,
        j: dataCounts.J,
        p: dataCounts.P,
      });
      const result = response.data.mbti;
      console.log("result: " + result);
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
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
    if (location.state?.dataCounts) {
      setDataCounts(location.state.dataCounts);
    }
  }, [location.state, setDataCounts]);

  useEffect(() => {
    if (shouldSubmit) {
      getResult(dataCounts);
      setShouldSubmit(false);
    }
  }, [dataCounts, shouldSubmit]);

  const handleOptionSelect = (type) => {

    setDataCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));

    if (questions.length > 0 && currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === questions.length - 1) {
      setShouldSubmit(true);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading || questions.length === 0 || options1.length === 0 || options2.length === 0) {
    return (
      <div className="spinner-container">
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className='container'>
      <br/>
      <div className="pepero-image-container">
        <img src={images[currentIndex]} alt="뺴뺴로" className="pepero-image" />
      </div>
      <h3 className='question'>{questions[currentIndex]}</h3>
        <div className='button-container'>
          <button className="answer-button" onClick={() => handleOptionSelect(options1[currentIndex].type)}>
            {options1[currentIndex].option}
          </button>
          <button className="answer-button" onClick={() => handleOptionSelect(options2[currentIndex].type)}>
            {options2[currentIndex].option}
          </button>
        </div>
      <br/><br/><br/>
    </div>
  );
}

export default OnePage;