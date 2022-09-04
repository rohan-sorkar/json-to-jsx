import React, {useState} from 'react';
import shortId from 'shortid';

const initialInputState = {a: 20, b: 10}

const App = () => {
  const [inputState, setInputState] = useState({...initialInputState});
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState(null)

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  const handleOperation = (operator) => {
    // const rst = eval(`${inputState.a} ${operator} ${inputState.b}`)
    const f = new Function(`operator`, `return ${inputState.a} ${operator} ${inputState.b}`);
    const result = f(operator);
    setResult(result);
    const history = {
      id: shortId.generate(),
      input: {...inputState},
      operation: operator,
      result: result,
      date: new Date()
    }
    setHistories([history, ...histories]);
  }
  const handleClear = () => {
    setInputState({...initialInputState})
  }

  const handleRestore = (history) => {
    setInputState({...history.input});
    setResult(history.result);
    setRestoreHistory(history.id)
  }
  console.log(restoreHistory)
  return (
    <div className='parent'>
      <div>
        <h1>Result: {result}</h1>
        <h3>input</h3>
        <input type="number" value={inputState.a} onChange={handleInputChange} name='a'/>
        <input type="number" value={inputState.b} onChange={handleInputChange} name='b' />
        <h4>operations</h4>
        <div className='btn-group'>
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleOperation('*')}>*</button>
          <button onClick={() => handleOperation('/')}>/</button>
          <button onClick={() => handleOperation('%')}>%</button>
          <button onClick={handleClear}>clear</button>
        </div>
        <h2>Histories</h2>
        {
          histories.length === 0 ? (
            <p>There is no history😥</p>
          ) : (
            <ul>
                {
                  histories.map((item) => (
                      <li key={item.id}>
                        <p>Operations: {item.input.a} {item.operation} {item.input.b}, Result = {item.result}</p>
                        <p>{item.date.toLocaleDateString()}, {item.date.toLocaleTimeString()}</p>
                        <button onClick={() => handleRestore(item)} className='restore' disabled={restoreHistory !== null && restoreHistory === item.id }>restore</button>
                      </li>
                  ))
                }
            </ul>
          )
        }
        
      </div>
    </div>
  )
}

export default App;