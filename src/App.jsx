import { createContext, useState } from 'react';
import './App.css'
import AppBar from './Components/AppBar';
import ResultList from './Components/ResultList';
// context create
export const InputContext = createContext();
// APP
function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue)

  const Value = {
    inputValue,
    setInputValue,
  }
  console.log(inputValue)
  return (
    <>
      <InputContext.Provider value={Value}>
        <AppBar />
        <ResultList />
      </InputContext.Provider>
    </>
  );
}
export default App;
