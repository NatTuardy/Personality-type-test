import React from 'react'
import Test from '../components/Test';
import './testPage.css';


function testPage() {
  return (
    <div className='wrapper'>
     <h1 className="title">Тест на определение личности</h1>
     
     
     <h3 className="answer">Выберите слово, которое, на Ваш взгляд, наиболее точно характеризует Вас.</h3>
     <div  className="buttonsWrap">
    <Test/>
    </div>
    </div>
  );
}

export default testPage;