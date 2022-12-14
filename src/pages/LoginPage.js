import React, { useContext, useLayoutEffect } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = (props) => {
    let { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type='text' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Пароль' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default LoginPage