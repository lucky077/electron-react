import './App.css';
import {Button, Input, Space} from "antd";
import {useState} from "react";

function App() {
  const {mysql} = global
  let [src,setSrc] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <Space direction='vertical'>
            <Button type='primary'>Click</Button>
        </Space>

        {/*<Button onClick={() => {*/}

        {/*}}>*/}
        {/*  Click*/}
        {/*</Button>*/}

      </header>
    </div>
  );
}

export default App;
