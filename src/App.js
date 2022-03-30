import './App.css';
import React, {useState} from "react";
import NameContext from "./components/Context";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper"

function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
        <Navbar />
        <FormWrapper />
       </NameContext.Provider>
    </div>
  );
}

export default App;
