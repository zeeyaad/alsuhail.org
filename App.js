import './App.css';
import AppointmentTable from './Components/AppointmentTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"


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

          <Route exact path="/Register">
            <Register />
          </Route>
          
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>

          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>

          <Route exact path="/Services">
            <Services />
          </Route>

          <Route exact path="/A">
            <AppointmentTable />
          </Route>

          
        </Switch>
      </Router>

      

    </>
  );
}

export default App;
