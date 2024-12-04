import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Container} from "@mui/material";

export const Form = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-width: 400px;
    min-height: 100px;
`;

export const FormButton = styled(Button)`
    background-color: #417851;
    margin: 16px 0 16px 0;
    font-size: 1.2rem;
`

export const FormContainer = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`

export const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`;

export const StyledTextField = styled(TextField)`
    margin: 0 0 10px 0;
    font-size: 1.2rem;
`;


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

StyledTextField.defaultProps = {
    id: "outlined",
    variant: "outlined",
};

