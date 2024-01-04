import React from 'react';
import Button from './Button';

function Keypad({ onButtonClick, onClear, onCalculate }) {
  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div className='button-grid'>
      {buttons.map((button) => {
        if (button === 'C') {
          return <Button key={button} label={button} onClick={onClear} />;
        } else if (button === '=') {
          return <Button key={button} label={button} onClick={onCalculate} />;
        } else {
          return <Button key={button} label={button} onClick={() => onButtonClick(button)} />;
        }
      })}
    </div>
  );
}

export default Keypad;
