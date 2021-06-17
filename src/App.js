import './App.css';
import ReactLogo from "./components/ReactLogo";
import React, {createRef} from "react";

const Logo = React.createContext(createRef());

function App() {

    let logoRef = React.createRef();

  return (

    <div className="App">
        <ReactLogo ref={logoRef}/>
        <Logo.Provider value={logoRef}>

        </Logo.Provider>
    </div>
  );
}

export default App;
export {Logo}
