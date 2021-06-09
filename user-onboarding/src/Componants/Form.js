import React,{ useState } from 'react'

export default function Form(props) {
    const {values,update,submit,change,disabled, errors, checked} = props

    const onChange= evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type ==="checkbox" ? checked: value
        change(name,valueToUse)
        
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    <h1> Go get our onboarding list! </h1>

    return (

    
    <form onSubmit={onSubmit}>

    <label> Name:
        <input 
        type="text" 
        name="name" 
        value="values.name" 
        onChange={onChange}/>
    </label>

    <label> Email:
        <input 
        type="email" 
        name="email" 
        value="values.email" 
        onChange={onChange}/>
    </label>

    <label> Password:
        <input 
        type="password" 
        name="password" v
        alue="values.password" 
        onChange={onChange}/>
    </label>

    <label> Do you Accept the T/Cs?
        <input 
        type="checkbox" 
        name="terms"
        checked={values.terms}
        onChange={onChange}/>
    </label>

    <label>
        <button>Submit</button>
    </label>
    
    
    
    
    </form>
    )
};