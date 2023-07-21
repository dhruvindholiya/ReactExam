import * as React from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../../UI/button/Button';
import Input from '../../../UI/Input/Input';


function LoginForm() {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        let logindata = ({
            email: event.target.email.value,
            password: event.target.password.value
        });

        if (logindata.email && logindata.password) {
            localStorage.setItem('loginStatus', 'userActive');
            event.target.email.value = '';
            event.target.password.value = '';
            navigate('/');


        } else {
            alert('Please fill to given form completely.')
        }

        event.preventDefault();
    }
    return (
        <form className='row g-4' onSubmit={handleLogin}>
            <div className='position-relative'>
                <Input name='email' className='w-100' type='text' size='small' id="email" label="Email" variant="outlined" />
            </div>
            <div className='position-relative'>
                <TextField name='password' className='w-100' type='text' size='small' id="password" label="Password" variant="outlined" autoComplete='false' />
            </div>
            <div className='position-relative'>
                <BaseButton type={'submit'} btnType='primary'>submit</BaseButton>
            </div>
        </form>
    );
}

export default LoginForm;


