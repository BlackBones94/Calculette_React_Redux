import React from 'react';

const Button = ({ label, onClick }) => (
    <button className={`button ${label === 'C' ? 'button-clear' : ''} ${label === '=' ? 'button-equal' : ''}`} onClick={() => onClick(label)}>
    {label}
  </button>);

export default Button;