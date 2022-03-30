import './App.css';
import React, {useState} from "react";
import NameContext from "./components/Context";

function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
