import React from 'react'

const RegisterForm = ({
    handleSubmit,
    handleChange,
    email,
    name,
    password

}) => {
    
    return (<form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange}
                value={name}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange}
                value={email}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={handleChange}
                value={password}
            />
        </div>

        <button className="btn btn-primary">Sub</button>
    </form>)

}

export default RegisterForm;
