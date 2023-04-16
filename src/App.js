import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import {Form, Stack} from 'react-bootstrap'

function App() {
  const [result, setResult] = useState(""); // result of calculation
  // new number to do calculation with existing result
  const [num, setNum] = useState(""); 

  const handleAdd = (e) => {
    e.preventDefault(); // prevent going to certain link
    setResult(Number(result) + Number(num));
    setNum("");
  };

  const handleMinus = (e) => {
    e.preventDefault();
    setResult(Number(result) - Number(num));
    setNum("");
  };

  const handleMultiply = (e) => {
    e.preventDefault();
    setResult(Number(result) * Number(num));
    setNum("");
  };

  const handleDivide = (e) => {
    e.preventDefault();
    setResult(Number(result) / Number(num));
    setNum("");
  };

  const handleResidual = (e) => {
    e.preventDefault();
    setResult(Number(result) % Number(num));
    setNum("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setResult("");
    setNum("");
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1> Calculator </h1>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Result</Form.Label>
          <Form.Control value={result} readOnly></Form.Control>
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Input Number</Form.Label>
          <Form.Control value={num} 
            placeholder="enter a number" onChange={(e) => setNum(e.target.value)} ></Form.Control>
          <Form.Text className="text-muted" />  
        </Form.Group>
        
        <Stack className="justify-content-center" direction="horizontal" gap={2}>
          <Button class="btn btn-outline-primary mr-1" onClick={handleAdd}>Add</Button>
          <Button class="btn btn-outline-primary" onClick={handleMinus}>Minus</Button>
          <Button class="btn btn-outline-primary" onClick={handleMultiply}>Multiply</Button>
          <Button class="btn btn-outline-primary" onClick={handleDivide}>Divide</Button>
          <Button class="btn btn-outline-primary" onClick={handleResidual}>Residual</Button>
          <Button class="btn btn-outline-primary" onClick={handleClear}>Clear</Button>
        </Stack>
      </Form>
    </div>
  );
}

export default App;