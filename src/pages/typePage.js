import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import Result from '../components/ResultComponent';

import './typePage.css';


const typePage = (n) => {
  // const History = useHistory();
  console.log('n - type', n)
  let returnBack = false
  if(n.location.state) {
    var {typeLetter, counter} = n.location.state;
  }
 
  const handleClick = () => {
  console.log('hello', counter)
  n.history.push('/result')
  returnBack = true

  return <Result counter={counter}/>
}


  return (
      <>
      {typeLetter && <div className='container'>
                     <div className={`typeText ${typeLetter}1`}></div>
                     <div className={`typeText ${typeLetter}2`}></div>
                     <button className="double-border-button" onClick={handleClick} >Вернуться назад</button>
                     {returnBack && <Result counter={counter}/>}
                </div>}
    </>
  );
}

export default typePage;