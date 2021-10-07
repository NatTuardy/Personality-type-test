// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Test from './components/Test';
import testPage from './pages/testPage';
import typePage from './pages/typePage';
import Result from './components/ResultComponent';

function App() {
  return (
    <div className="App">
     {/* <h1 className="title">Тест на определение личности</h1>
     <h3 className="answer">Выберите слово, которое, на Ваш взгляд, наиболее точно характеризует Вас.</h3>
     <div  className="buttonsWrap">
    <Test/>
    </div> */}
    <Switch>
              <Route path="/page" exact component={testPage} />
              <Route path="/type" exact component={typePage} />
              <Route path="/result" exact component={Result}/>

              <Redirect to="/page" />
            </Switch>

    </div>
  );
}

export default App;
