import React,{ useState, useEffect } from 'react'
import './App.css';
import UserForm from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './components/Validation.js'
import Users from './components/Users'

//set initial values for form
const initialFormValues = {
name: '',
email: '',
password: '',
tos: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}


const initialDisabled= true

export default function App() {

//set states
const [users,setUsers] = useState([])
const [formValues,setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [ disabled, setDisabled] = useState(initialDisabled)



//create that new person!
const postNewPerson = newPerson => {
  axios
    .post("https://reqres.in/api/users",newPerson)
    .then(res => {
      setUsers([...users,res.data])
      setFormValues(initialFormValues)
    })
    .catch(err=> {
      console.log("error in the post!")
    })
};


const inputChange = (name,value) => {
  yup
    .reach(schema,name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
      [name]: " ",
    })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })
      setFormValues({
        ...formValues,
        [name]:value
      })
}



const formSubmit = () => {
  const newPerson ={
    name: formValues.name,
    email:formValues.email,
    password: formValues.password,
    tos: formValues.tos
  }
  postNewPerson(newPerson)
}




  return (
    <div>

      <UserForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        users.map(user=> {
          return ( 
          <Users key={users.email} details={users} /> 
          )
        }
        )}
      
    </div>
  )}
