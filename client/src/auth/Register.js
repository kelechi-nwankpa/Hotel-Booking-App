import React from "react";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from 'axios';

const Register = () => {

    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = userCredentials;

    const handleChange = (event) => {
        const { value, id } = event.target;
        setUserCredentials({ ...userCredentials, [id]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.table({ name, email, password})


    }

   
    return (
        <>

            <div className="container-fluid bg-secondary h1 p-4 text-center">
                <h1>Register Page</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div>
                        <RegisterForm 
                           handleChange={handleChange}
                           handleSubmit={handleSubmit}
                           name={name}
                           email={email}
                           password={password}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;
