
import { useHistory } from 'react-router-dom';
import './Test.css'

const Result = ({counter = {d: 1, i:1, s:1, c:1}}) => {
    const history = useHistory();
    const getType = (letter)=> {
        console.log('letter', letter)
        const options = {
            typeLetter: letter,
            counter: counter,
        }
        history.replace('/type', options)
    }
    

    return ( <div className='wrapper'>
        <h1 className="title">Результат теста</h1>
        <button className="double-border-button" onClick={()=>getType('d')} > D-dominance = {counter.d}</button>
        <button className="double-border-button" onClick={()=>getType('i')}> I-influence = {counter.i}</button>
        <button className="double-border-button"onClick={()=>getType('s')}> S-stability = {counter.s}</button>
        <button className="double-border-button"onClick={()=>getType('c')}> C-compliance = {counter.c}</button>
        </div> );
}
 
export default Result;