import React from 'react';
import LoginForm from './LoginForm'

function LoginPage(props) {
    return (
        <div style={{width: '500px'}} className='py-5 my-5 mx-auto text-center'>
            <div className='bg-light rounded shadow p-5'>
                <h2 className='mb-5'>Login</h2>
                <LoginForm />
            </div>
        </div>

    );
}

export default LoginPage;

