
import React, { component } from "react";
import Status from '../component/status/statusPage'
import LoginPage from '../component/Login/loginPage'
import FirstPage from '../component/home/homePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function RouterComponenet(props) {
    return (
        <div>
            <h1>Home Page:</h1>
            <LinkExmple></LinkExmple>
            <Switch>
                <Route path="/Connect">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/Status">
                    <Status></Status>
                </Route>
            </Switch>
        </div>
    );
}

function LinkExmple() {
    return (
        <>
            <br></br>
            <Link to="/Connect">Connect</Link>
        </>
    );
}
