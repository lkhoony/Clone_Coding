import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {Home, Abroad, Domestic, Airline, Hotel, Tour, Theme} from "../pages";
import '../css/Page.css';

class Page extends Component{

    render() {
       
        return(
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/abroad">
                    <Abroad></Abroad>
                </Route>
                <Route path="/domestic">
                    <Domestic></Domestic>
                </Route>
                <Route path="/airline">
                    <Airline></Airline>
                </Route>
                <Route path="/hotel">
                    <Hotel></Hotel>
                </Route>
                <Route path="/tour">
                    <Tour></Tour>
                </Route>
                <Route path="/theme">
                    <Theme></Theme>
                </Route>
            </Switch>
        );
    }
}

export default Page;