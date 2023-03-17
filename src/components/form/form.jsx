import React from 'react'
import Input from '../input'

const Form = ({children, changeHandler, firstPlaceHolder, secondPlaceHolder}) => {
  return (
    <div>
        <form>
            <Input name="firstName" type="text" placeHolder={firstPlaceHolder} onChange={changeHandler} label="First Name: " />
            <Input name="lastName" type="text" placeHolder={secondPlaceHolder} onChange={changeHandler} label="Last Name: " />
            {children}

        </form>
    </div>
  )
}

export default Form