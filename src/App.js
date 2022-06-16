import {useState, useEffect} from 'react';
import './App.css';

const Person = (props) => {
  return(
  <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lName}</h2>
    <h2>Age: {props.age}</h2>  
  </>
  )
};

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    alert(`You have loaded the page`)
  }, [value]);
  
  const addValue = () =>{
    setValue(value+1);
  }
  function minusValue(){
    if(value === 0){
      alert(`Limit reached`)
    }
    else{
      setValue((prevCount)=>(
          prevCount - 1
        ))
    }
  }

  const name = 'Jack';
  const name1 = null;
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <h3>Hello {isNameShowing ? name : `Guest`}!</h3>
      {name1 ? (
      <>
        test  
      </>): (
        <>
          <h2>test</h2>
          <h1>No name</h1>
        </>
      )}
      <Person name={`Jane`} lName="Doe" age={30}/>
      <Person name={`John`} lName="Doe" age={25}/>
      <Person name={`Marvin`} lName="Orias" age={25}/>
      <Person name={`Angela Greta`} lName="Matugas" age={21}/>
      <Person name={`Atarah Elisha`} lName="Macaraig" age={4}/>
      <button onClick={addValue}>INCREASE(+)</button>
      <h1>{value}</h1>
      <button onClick={minusValue}>DECREASE(-)</button>
    </div>
  );
}

export default App;
