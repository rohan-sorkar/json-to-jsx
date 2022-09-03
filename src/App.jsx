import React, { useState } from 'react';
import {formFields} from './constants';

const App = () => {
  //! transform json 
  const transformJson = (obj) => {
    return Object.keys(obj).reduce((acc, cur) => {
      acc[cur] = {
        ...obj[cur],
        value: obj[cur].type === 'checkbox' ? false : ''
      }
      return acc;
    }, {});
  }

  //! source of data
  const [state, setState] = useState(transformJson({...formFields}));

  //! mapObjectToArray
  const mapObjToArray = (obj) => {
    return Object.keys(obj).map((key) => ({...obj[key], name: key}));
  }
  const formData = mapObjToArray(state);

  //! form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const getValue = (obj) => {
      return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = obj[cur].value
        return acc;
      }, {});
    }
    const values = getValue(state);
    console.log(values);
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value
      }
    })
  } 

  const handleCheck = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: !state[e.target.name].value
      }
    })
  } 

  const handleSelect = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value
      }
    })
  }

  return (
    <div className='parent'>
      <form onSubmit={handleSubmit}>
      {
      formData.map((item) => (
          <div key={item.id}>
            {item.type === 'select' ? (
              <>
              <label>{item.label}</label>
              <select name={item.name} id={item.name} onChange={handleSelect}>
                <option value="">choose...</option>
                {item.options.map((opt, index) => (
                  <option key={index} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              </>
            ) : (
              <>
              <label>{item.label}</label>
              <input type={item.type} placeholder={item.placeholder} value={item.value} onChange={item.type === 'checkbox' ? handleCheck : handleChange} name={item.name} />
              </>
            )}
            
          </div>
          ))
        }
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default App;