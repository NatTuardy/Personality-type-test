import React, {useState, useMemo} from 'react'
import { useHistory } from 'react-router-dom';
import Result from './ResultComponent';
import {answers} from './aswers'
import './Test.css';

const initialState = {
    index: 0,

}
const CounterState = {
    d: 0,
    i: 0,
    c:0,
    s:0,
}

function Test() {
    const history = useHistory();
const [index, setIndex] = useState(initialState.index)
const [state1, setstate1] = useState(answers[index])
   const [counter, setCounter] = useState(CounterState) 
      const onChoose = (key) => {
            switch (key) {
                case 'd':                 
                case 'i':                   
                case 'c':                   
                case 's':
                    setCounter(prev => ({...prev, [key]: counter[key] +1}))
                    break;
                default:
               console.log('vse huevo')
              }
if(answers.length  > index ) {
    setIndex(index +1)
    setstate1(answers[index +1])  
}

}

const test = () => {
    return state1.map((item, i) => <a className="double-border-button" onClick={()=> onChoose(item.key)}>{item.value}</a> );
}

const page = () => {
    if(index < answers.length){
        return <p className="page">  стр {index+1} из {answers.length}</p>
    }
}

    return (
        <>
      {index < answers.length ? test(): <Result counter={counter}/>} 
      {page()}
      
        </>
    )
    
}

export default Test;