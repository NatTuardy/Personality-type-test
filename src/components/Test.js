import React, {useState, useMemo} from 'react'
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

    const answers = [
        [ {key:"c",value: 'Сдержаный'}, {key:"d", value: 'Сильный'}, {key: "s", value: 'Заботливый'}, {key:"i", value: 'Экспрессивный'}],
        [ {key:"d",value: 'Первопроходец'}, {key:"c", value: 'Корректный'}, {key: "i", value: 'Восторженный'}, {key:"s", value: 'Удовлетворенный'}],
        [ {key:"s",value: 'Старательный'}, {key:"i", value: 'Воодушевленный'}, {key: "d", value: 'Смелый'}, {key:"c", value: 'Точный'}],
        [ {key:"d",value: 'Спорщик'}, {key:"c", value: 'Сомневающийся'}, {key: "s", value: 'Нерешительный'}, {key:"i", value: 'Непредсказуемый'}],
        [ {key:"c",value: 'Уважительный'}, {key:"i", value: 'Общительный'}, {key: "s", value: 'Терпеливый'}, {key:"d", value: 'Отважный'}],
        [ {key:"i",value: 'Убедительный'}, {key:"d", value: 'Самонадеянный'}, {key: "c", value: 'Логичный'}, {key:"s", value: 'Мягкий'}],
        [ {key:"c",value: 'Осторожный'}, {key:"s", value: 'Ровный'}, {key: "d", value: 'Решительный'}, {key:"i", value: 'Компанейский'}],
        [ {key:"i",value: 'Популярный'}, {key:"d", value: 'Напористый'}, {key: "c", value: 'Перфекционист'}, {key:"s", value: 'Искренний'}],
        [ {key:"i",value: 'Яркий '}, {key:"c", value: 'Скромный'}, {key: "s", value: 'Покладистый '}, {key:"d", value: 'Непреклонный'}],
        [ {key:"c",value: 'Педантичный '}, {key:"i", value: 'Оптимистичный'}, {key: "d", value: 'Настойчивый '}, {key:"s", value: 'Уживчивый'}],
        [ {key:"d",value: 'Непреклонный '}, {key:"c", value: 'Смиренный'}, {key: "s", value: 'Гостеприимный '}, {key:"i", value: 'Болтливый'}],
        [ {key:"s",value: 'Дружелюбный '}, {key:"c", value: 'Внимательный'}, {key: "i", value: 'Игривый '}, {key:"d", value: 'Волевой'}],
        [ {key:"i",value: 'Обаятельный '}, {key:"d", value: 'Рискующий'}, {key: "c", value: 'Дисциплинированный '}, {key:"s", value: 'Осмотрительный'}],
        [ {key:"c",value: 'Сдержанный '}, {key:"s", value: 'Постоянный'}, {key: "d", value: 'Напористый '}, {key:"i", value: 'Привлекательный'}],
        [ {key:"i",value: 'Восторженный '}, {key:"c", value: 'Аналитичный'}, {key: "s", value: 'Сочувствующий '}, {key:"d", value: 'Решительный'}],
        [ {key:"d",value: 'Руководящий '}, {key:"i", value: 'Импульсивный'}, {key: "s", value: 'Неторопливый '}, {key:"c", value: 'Критичный'}],
        [ {key:"c",value: 'Последовательный '}, {key:"d", value: 'Твердый'}, {key: "i", value: 'Живой '}, {key:"s", value: 'Инертный'}],
        [ {key:"i",value: 'Влиятельный '}, {key:"s", value: 'Добрый'}, {key: "d", value: 'Независимый '}, {key:"c", value: 'Организованный'}],
        [ {key:"c",value: 'Идеалист '}, {key:"i", value: 'Популярный'}, {key: "s", value: 'Приятный '}, {key:"d", value: 'Прямой'}],
        [ {key:"d",value: 'Нетерпеливый '}, {key:"c", value: 'Серьезный'}, {key: "s", value: 'Медлительный '}, {key:"i", value: 'Эмоциональный'}],
        [ {key:"d",value: 'Соперничающий '}, {key:"i", value: 'Спонтанный'}, {key: "s", value: 'Преданный '}, {key:"c", value: 'Задумчивый'}],
        [ {key:"c",value: 'Самоотверженный '}, {key:"s", value: 'Деликатный'}, {key: "i", value: 'Убедительный '}, {key:"d", value: 'Мужественный'}],
        [ {key:"s",value: 'Зависимый '}, {key:"i", value: 'Легкомысленный'}, {key: "c", value: 'Выносливый '}, {key:"d", value: 'Подавляющий'}],
        [ {key:"s",value: 'Толерантный '}, {key:"c", value: 'Щепетильный'}, {key: "i", value: 'Вдохновляющий '}, {key:"d", value: 'Направляющий'}],
       
     ]
const [index, setIndex] = useState(initialState.index)
const [state1, setstate1] = useState(answers[index])
//    const [counterD, setCounterD] = useState(CounterState.d)
   const [counter, setCounter] = useState(CounterState)


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
            // console.log('d',d)
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
          setstate1(answers[index])  
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
// console.log('index0', index)
    // console.log('answers[index]0', answers[index])
if(answers.length  > index ) {
    setIndex(index +1)
    setstate1(answers[index +1])  
    // setstate1(prev => ([...prev, answers[index +1]]) ) 
    // console.log('index1', index)
    // console.log('answers[index]1', answers[index])
}
// if(answers.length -1 === index){
//    console.log('the end')
// }
}


const result =()=> {
    // console.log('counter', counter)
    return (
        <>
        <a className="double-border-button"> D = {counter.d}</a>
        <a className="double-border-button"> I = {counter.i}</a>
        <a className="double-border-button"> S = {counter.s}</a>
        <a className="double-border-button"> C = {counter.c}</a>
        {/* {console.log('counter', counter)} */}
        </>
    )
}

// let test = index !== answers.length && state1.map((item, i) => {
//     return (
//         <>
//         <button onClick={()=> onChoose(item.key)}>{item.value}</button>
//       {/* {console.log('i in  map:', i)} */}
//       </>
//     )
//   });

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
      {index < answers.length ? test(): result()} 
      {page()}
      
        </>
    )
    
}

export default Test;