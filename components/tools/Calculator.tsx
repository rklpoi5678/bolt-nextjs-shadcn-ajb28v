'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleClick = (value: string) => {
    setExpression(prev => prev + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(expression).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Input value={expression} readOnly className="mb-2" />
      <Input value={result} readOnly className="mb-2" />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map(btn => (
          <Button key={btn} onClick={() => handleClick(btn)}>{btn}</Button>
        ))}
        {['4', '5', '6', '*'].map(btn => (
          <Button key={btn} onClick={() => handleClick(btn)}>{btn}</Button>
        ))}
        {['1', '2', '3', '-'].map(btn => (
          <Button key={btn} onClick={() => handleClick(btn)}>{btn}</Button>
        ))}
        {['0', '.', '=', '+'].map(btn => (
          <Button key={btn} onClick={btn === '=' ? handleCalculate : () => handleClick(btn)}>{btn}</Button>
        ))}
        <Button onClick={handleClear} className="col-span-4">Clear</Button>
      </div>
    </div>
  );
}