// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
     <h1 className="title">Тест на определение личности</h1>
     <h3 className="answer">Выберите слово, которое, на Ваш взгляд, наиболее точно характеризует Вас.</h3>
     <div  className="buttonsWrap">
    <Test/>
    </div>
    </div>
  );
}

export default App;
