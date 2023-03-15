import './App.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [formValues, setFormValues] = useState("");
  const [showUserDetails, setShowUserDetails] = useState("");

  const changeHandler = (event) => {
    const ele = event.target;

    if (ele.name  === 'firstName') {
      setFirstName(ele.value);
    }
    if (ele.name  === 'lastName') {
      setLastName(ele.value);
    }
}

const submitHandler = (event) => {
  event.stopPropagation();
  event.preventDefault();
  
  if (firstName !== "" && lastName !== "") {
    setFormValues({
      firstName: firstName,
      lastName: lastName
    });
    setShowUserDetails(true);
  }
}

  return (
    <div className="App">
      <h1 className='titles'>React Form</h1>
      <form>
        <p>
          First Name: <input type = "text" name='firstName' placeholder='First name' onChange={changeHandler}/>
        </p>
        <p>
          Last Name: <input type = "text" name = 'lastName' placeholder='Last name' onChange={changeHandler}/>
        </p>
        <p>
          <button className='btn-submit' onClick={submitHandler}>Submit</button>
        </p>
      </form>
      {showUserDetails && (<Navigate to="/user-details" replace={true} state={formValues}/>)}
    </div>

  );
}

export default App;