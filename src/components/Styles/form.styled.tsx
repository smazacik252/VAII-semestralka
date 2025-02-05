import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Container} from "@mui/material";

export const Form = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 400px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0.6);
    color: #F5E4C1;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 15px;
    border-radius: 8px;
`;

export const FormButton = styled(Button)`
    background-color: #417851;
    color: #F5E4C1;
    margin: 16px 0 16px 0;
    font-size: 1.2rem;
    font-family: 'inherit';
    font-weight: bold;
`

export const FormContainer = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`

export const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`;

export const TextFieldStyled = styled(TextField)`
    & .MuiOutlinedInput-root {
        color: #F5E4C1;

        & fieldset {
            border-color: #417851;
        }

        &:hover fieldset {
            border-color: #6DAF7E;
        }

        &.Mui-focused fieldset {
            border-color: #9BCC92; /
        }
    }

    & .MuiInputLabel-root {
        font-size: 1.1rem;
        font-family: 'inherit'; 
        color: #F5E4C1;

        &.Mui-focused {
            color: #F5E4C1;
        }
    }
    
    & .MuiOutlinedInput-input {
        color: #F5E4C1;
    }

    & .MuiFormHelperText-root {
        color: #d32f2f;
    }
`


export const FormErrorAlert = styled(Alert)`
    background-color: #d32f2f; 
    color: #fff; 
    max-width: 400px;
    margin: 16px 0 16px 0;

    .MuiAlert-icon {
        color: #fff; 
    }

    .MuiAlert-action {
        color: #fff; 
    }
`;

export const FormSuccessAlert = styled(Alert)`
    background-color: #2e7d32; 
    color: #fff; 
    align-items: center;
    max-width: 400px;
    margin: 16px 0 16px 0;

    .MuiAlert-icon {
        color: #fff; 
    }

    .MuiAlert-action {
        color: #fff; 
    }
`;

FormButton.defaultProps = {
    variant: "contained",
    size: "large",
};

TextFieldStyled.defaultProps = {
    id: "outlined",
    variant: "outlined",
};

