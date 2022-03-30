import React, {useContext} from 'react';

import NameContext from "./Context";

const style = {
    background: "purple",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontWeight: "bold"
  };
  
export default () => {
    const { name } = useContext(NameContext);

    return <div style={style}>Hi {name}!</div>;
};