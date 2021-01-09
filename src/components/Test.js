import React, {useState, useMemo} from 'react'

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
    const answers = [
       [ {key:"s",value: 'Сдержаный'}, {key:"d", value: 'Сильный'}, {key: "c", value: 'Заботливый'}, {key:"i", value: 'Экспрессивный'}],
       [ {key:"d",value: 'Первопроходец'}, {key:"c", value: 'Корректный'}, {key: "i", value: 'Восторженный'}, {key:"s", value: 'Удовлетворенный'}],
       [ {key:"s",value: 'Старательный'}, {key:"i", value: 'Воодушевленный'}, {key: "d", value: 'Смелый'}, {key:"c", value: 'Точный'}],
       [ {key:"d",value: 'Спорщик'}, {key:"c", value: 'Сомневающийся'}, {key: "s", value: 'Нерешительный'}, {key:"i", value: 'Непредсказуемый'}],
       [ {key:"c",value: 'Уважительный'}, {key:"i", value: 'Общительный'}, {key: "s", value: 'Терпеливый'}, {key:"d", value: 'Отважный'}],
      
    ]
const [index, setIndex] = useState(initialState.index)
const [state1, setstate1] = useState(answers[index])
//    const [counterD, setCounterD] = useState(CounterState.d)
   const [counter, setCounter] = useState(CounterState)

const onCounter = (name)=> {
//    setCounter([name] +=1)
}

var d = 0;
let i = 0;
let c = 0;
let s = 0;

const onChooseOld = (key) => {
console.log('key111', key)
    switch (key) {
        case 'd':
            // let d= counterD +1;

            // setCounterD(counterD+1);
            //setCounter(prev => ({d:d}))
            // ++d ;
            setCounter(prev => ({...prev, d : counter.d+1 }))
            //onCounter('d')
            // console.log('counter.d', counterD)
            console.log('d',d)
            break;
        case 'i':
            setCounter(prev => ({...prev, i: counter.i+1}))
            console.log('counter.i', counter.i)
            break;
        case 'c':
            setCounter(prev => ({...prev, c:counter.c +1}))
            console.log('counter.c', counter.c)
            break;
        case 's':
            setCounter(prev => ({...prev, s: counter.s +1}))
            console.log('counter.s',counter.s)
            break;
        default:
       console.log('vse huevo')
      }

      console.log('key0000', key)
      console.log('index0', index)
          console.log('answers[index]0', answers[index])
      if(answers.length -1 > index ) {
          setIndex(index +1)
          setstate1(answers[index +1])  
          console.log('index1', index)
          console.log('answers[index]1', answers[index])
      }
    }

    
      const onChoose = (key) => {
        console.log('key111', key)
            switch (key) {
                case 'd':                 
                case 'i':                   
                case 'c':                   
                case 's':
                    setCounter(prev => ({...prev, [key]: counter[key] +1}))
                    console.log('counter',counter[key])
                    break;
                default:
               console.log('vse huevo')
              }

console.log('key0000', key)
console.log('index0', index)
    console.log('answers[index]0', answers[index])
if(answers.length  > index ) {
    setIndex(index +1)
    setstate1(answers[index +1])  
    console.log('index1', index)
    console.log('answers[index]1', answers[index])
}
// if(answers.length -1 === index){
//    console.log('the end')
// }
}


const result =()=> {
    console.log('counter', counter)
    return (
        <>
        <p> D = {counter.d}</p>
        <p> I = {counter.i}</p>
        <p> S = {counter.s}</p>
        <p> C = {counter.c}</p>
        {console.log('counter', counter)}
        </>
    )
}

let test = state1.map((item, i) => {
    return (
        <>
        <button onClick={()=> onChoose(item.key)}>{item.value}</button>
      {console.log('item000', item)}
      </>
    )
  });

    return (
        <>
        
      {index === answers.length -1? result(): test}

        
       
        
        </>
    )
    
}

export default Test;