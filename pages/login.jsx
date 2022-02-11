import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../layout'
import { login } from '../store/slices/user'

const Login = () => {
    const [state, setstate] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email: state.email, password: state.password }));
    }

    const handleChange = (e) => {
        const { name, value }  = e.target
        
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>  
                <div className="form-group">
                    <label> Email </label>
                    <input className="form-control" name="email" type="text" placeholder="Email:" value={state.email} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label> Password </label>
                    <input className="form-control" name="password" type="password" placeholder="Email:" value={state.password} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <button type="submit"> Login </button>
                </div>
            </form>
        </Layout>
    )
}

export default Login;