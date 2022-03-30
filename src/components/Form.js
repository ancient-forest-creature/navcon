import React, {useContext} from 'react';
import NameContext from "./Context";

const Form = () => {
    const context = useContext(NameContext);
    console.log(context);
    let tempName = "";
    const typing = e => {
        tempName = e.target.value;
    };

    const btnClick = e => {
        context.setName(tempName);
        e.target.value = "";
    };

    return(
        <div>
            <div>
                <p>Your Name:</p>
                <input onChange={typing} type="text" />
            </div>
            <div onClick={btnClick}> <span>Change</span></div>
        </div>
    )
}

export default Form;