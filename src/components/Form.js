import React, {useContext} from 'react';
import NameContext from "./Context";

const Form = (props) => {
    const {name, setName} = useContext(NameContext);
    return(
        <div>
            <lable htmlFor="name">Your Name:</lable>
            <inpput type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></inpput>
        </div>
    )
}
