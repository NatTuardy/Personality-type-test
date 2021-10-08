import './App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import testPage from './pages/testPage';
import typePage from './pages/typePage';
import Result from './components/ResultComponent';

function App() {
  return (
    <div className="App">
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
