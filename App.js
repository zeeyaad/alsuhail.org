import './App.css';
import Appointments from './Pages/Appointments';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"
import Doctors from "./Pages/Doctors"
import ForgetPassword from "./Pages/ForgetPassword"
import Paitent from "./Pages/Patient"
import AppointmentForm from "./Pages/AppointmentForm"
import MyRecords from "./Pages/MyRecords"

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
          
          <Route exact path="/Forget Password">
            <ForgetPassword />
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

          <Route exact path="/Doctors">
            <Doctors />
          </Route>

          <Route exact path="/Paitent Dashboard">
            <Paitent />
          </Route>

          <Route exact path="/Appointments">
            <Appointments/>
          </Route>

          <Route exact path="/Messages">
            <Appointments/>
          </Route>

          <Route exact path="/Schedule Appointment">
            <AppointmentForm />
          </Route>

          
          <Route exact path="/My Records">
            <MyRecords />
          </Route>

          
        </Switch>
      </Router>

      

    </>
  );
}

export default App;
