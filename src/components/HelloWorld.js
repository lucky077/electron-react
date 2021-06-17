import {useContext} from "react";
import {Logo} from "../App";
import {Button} from "_antd@4.16.3@antd";

function HelloWorld() {

    let logo = useContext(Logo);

    return (
        <div>
            <Button type='primary' onClick={() => {
                logo.current.fast()
            }
            }>Hello World</Button>
        </div>
    )

}

export default HelloWorld
