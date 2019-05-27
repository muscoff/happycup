import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Menstrual from '../components/Menstrual/Menstrual';
import How from '../components/How/How';
import Contact from '../components/Contact/Contact';
import Shop from '../components/Shop/Shop';
import Nav from '../components/Nav';


export default function PageRoute() {
    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route exact strict path="/about" component={About} />
                    <Route exact strict path="/menstrual" component={Menstrual} />
                    <Route exact strict path="/how" component={How} />
                    <Route exact strict path="/contact" component={Contact} />
                    <Route exact strict path="/shop" component={Shop} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}
