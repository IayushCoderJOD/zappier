import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate("/create-zap")
        }} >
            Please create your first zap
        </div>
    )
}

export default Login
