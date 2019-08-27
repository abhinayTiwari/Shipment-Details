import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shipments from "../components/Shipments";
import ShipmentDetail from "../components/ShipmentDetail";
import '../css/app.css';

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Router>
                    <Switch>
                        <Route path="/" exact render={
                            ()=>{
                                return (<Shipments />)
                            }
                        }/>
                        <Route path="/shipments/:shipmentId" exact render={
                            (props)=>{
                                return (<ShipmentDetail {...props} />)
                            }
                        }/>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;