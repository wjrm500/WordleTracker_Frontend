import PropTypes from 'prop-types'
import React, { useState } from 'react'

const LoginBox = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = () => {
        if (username == '' || password == '') {
            alert('No!')
            return
        }
        onLogin()
    }
    return (
        <div id="loginBox">
            <div className="loginBoxField">
                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="loginBoxField">
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Submit" onClick={onSubmit} />
        </div>
    )
}

LoginBox.propTypes = {
    onLogin: PropTypes.func
}

export default LoginBox