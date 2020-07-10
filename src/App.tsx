import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import Money from './views/Money';
import NoMatch from './views/NoMatch';



 function App() {
    return (
        <Router>

                    <Switch>
                        <Route path="/tags">
                            <Tags />
                        </Route>
                        <Route path="/money">
                            <Money />
                        </Route>
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>

        </Router>
    );
}


export default App;
