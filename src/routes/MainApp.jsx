// MainApp.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App'; // Adjust the import path
import RotatingPizzaPage from '../pages/RotatingPizzaPage';
import Pizza from '../components/Pizza';
const MainApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/rotating-pizza" component={RotatingPizzaPage} />
                <Route path="/pizza" component={Pizza} />
            </Switch>
        </Router>
    );
};
export default MainApp;



