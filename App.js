import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./Pages/Main"

function App() {
  return (
    <>
      <Router>
        
        <Switch>

          <Route>
            <Main />
          </Route>

        </Switch>
      </Router>


      {/* <Login /> */}
      {/* <Register  /> */}
      {/* <Sidebar/> */}
      {/* <Patient /> */}
      {/* <MedicalHistory/> */}
      {/* <Documents /> */}

      {/* <Appointments/> */}

    </>
  );
}

export default App;
