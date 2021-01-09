import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
     <h1>Тест на определение личности</h1>
     <h3>Выберите слово, которое, на Ваш взгляд, наиболее точно характеризует Вас.</h3>
    <Test/>
    </div>
  );
}

export default App;
