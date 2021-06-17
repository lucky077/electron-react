import './App.css';
import ReactLogo from "./components/ReactLogo";
import React, {createRef} from "react";
import HelloWorld from "./components/HelloWorld";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Logo = React.createContext(createRef());

function App() {

    let logoRef = React.createRef();

    return (
        <div className="App">
            <ReactLogo ref={logoRef}/>
            <Logo.Provider value={logoRef}>
                <Router>
                    <Route path='/' exact component={HelloWorld}></Route>
                </Router>
            </Logo.Provider>
        </div>
    );
}


export default App;
export {Logo}
