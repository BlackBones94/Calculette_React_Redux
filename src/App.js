import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Display from './component/Display';
import Keypad from './component/Keypad';
import { addCharacter, clearDisplay, calculateResult } from './utils/calculatorSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.value);

  const handleButtonClick = (character) => {
    dispatch(addCharacter(character));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleResult = () => {
    dispatch(calculateResult());
  };

  return (
    <div className='calculator'>
      <Display value={displayValue} />
      <Keypad
        onButtonClick={handleButtonClick}
        onClear={handleClear}
        onCalculate={handleResult}
      />
    </div>
  );
}

export default App;