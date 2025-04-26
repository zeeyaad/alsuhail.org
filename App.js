import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./Pages/Main"
import Login from "./Pages/Login"

function App() {
  return (
    <>
      <Router>

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>



    </>
  );
}

export default App;
