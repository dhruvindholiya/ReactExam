import styled from 'styled-components';

const BaseButton = styled.button({
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    minWidth: '85px',
    padding: '5px 15px',
    borderRadius: '4px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    border: '1px solid rgba(25, 118, 210, 0.5)',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#1565c0',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
});

export const PrimaryButton = styled(BaseButton)({
    backgroundColor: '#1976d2',

})
export const SecondaryButton = styled(BaseButton)({
    backgroundColor: 'transparent',
    border: '1px solid #FFFFFF',
})