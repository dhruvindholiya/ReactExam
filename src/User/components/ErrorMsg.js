import React from 'react';
import { styled } from 'styled-components';
import ErrorIcon from '@mui/icons-material/Dangerous';

const ErrorWrapper = styled.div``
const ErrorText = styled.h1`
    color: #dddddd;
    margin-bottom: 0;
    display: flex;
    align-items: end;
    gap: 10px;
`

function ErrorMsg({text, ...rest}) {
    return (
        <ErrorWrapper {...rest} className='d-flex align-items-center justify-content-center'>
            <ErrorText><ErrorIcon sx={{fontSize: '2.5rem'}} />{text}</ErrorText>
        </ErrorWrapper>
    );
}

export default ErrorMsg;