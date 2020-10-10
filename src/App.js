import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import DashboardPage from './pages/DashboardPage.js';
import ForgotPassPage from './pages/ForgotPassPage.js';
import ForgotEmailPage from './pages/ForgotEmailPage.js';
import './App.css';

//DARK MODE

function App() {

 // const theme = createMuiTheme({
    //palette: {
     // type: 'dark'
   // },
 // });

  return (
  //  <ThemeProvider theme={theme}>
        <Router> 
          <div>   
            <nav>
              <li>
                <Link to="login">LogIn</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </nav>
            <Switch>
              <Route path="/forgotemail">
                <ForgotEmailPage />
              </Route>
              <Route path="/forgotpass">
                <ForgotPassPage />
              </Route>
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
              <Route path="/signup">
                <SignUpPage />
              </Route>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <Route path="/">
                <LoginPage/>
              </Route>
            </Switch>
          </div>
        </Router>
   // </ThemeProvider>
  );
}

export default App;
