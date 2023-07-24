import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from 'styled-components';

const LoaderWrapper = styled.div``

function Loader({ ...rest }) {
    return (
        <LoaderWrapper {...rest} className='d-flex align-items-center justify-content-center'>
            <CircularProgress />
        </LoaderWrapper>
    );
}

export default Loader;