import './App.css';
import OptionSelection from './components/OptionSelection';
import { Configuration, OpenAIApi } from 'openai';
import { ARRAY_ITEMS } from './AIOptions/options';
import AIResponse from './components/AIResponse';
import { useState } from 'react';
import { Route, BrowserRouter, Router, Routes, Link} from "react-router-dom"


function App() {
  const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (optionAI) => {
    setOption(optionAI); 
  };

  const passInput = (e) => {
    setInput(e.target.value)
  }; 

  const reset = () => {
    setInput("");
    setResult("");
  }

   

  return (
    <div className="App">
      {/* {Object.values(option).length === 0 ? (
      <OptionSelection arrayItems={ARRAY_ITEMS} selectOption={selectOption} /> 
      ) : (<AIResponse response={response} setInput={passInput} result={result} reset={reset} input={input}/>
      )}; */}
        <Routes>
          <Route path='/' Component={OptionSelection} />
          <Route path="/:component" Component={AIResponse} />
        </Routes>
    </div>
  );
};

export default App;
