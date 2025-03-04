import './App.css';
import Main from './Pages/Main';
import Another from "./Pages/Another";
import AnotherData from "./Data/AnotherData";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/Mentinance'>
            <Another Image={AnotherData[1].Image} Content={ AnotherData[1].Content} />
          </Route>
          <Route exact path='/Cleaning'>
            <Another Image={AnotherData[2].Image} Content={AnotherData[1].Content} />
          </Route>
          <Route exact path='/Contractors'>
            <Another Image={AnotherData[0].Image} Content={AnotherData[1].Content} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
