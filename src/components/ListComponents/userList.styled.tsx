import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const StyledTableContainer = styled(TableContainer)`
    margin-top: 16px;
    
`;

export const ActionBox = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 8px;
`;

export const SaveButton = styled(Button)`
    background-color: #4caf50;
    color: white;

    &:hover {
        background-color: #45a049;
    }
`;

export const CancelButton = styled(Button)`
    background-color: #f44336;
    color: white;

    &:hover {
        background-color: #e53935;
    }
`;

export const EditButton = styled(Button)`
    background-color: #1976d2;
    color: white;

    &:hover {
        background-color: #1565c0;
    }
`;

export const DeleteButton = styled(Button)`
    background-color: #d32f2f;
    color: white;

    &:hover {
        background-color: #c62828;
    }
`;

export const ErrorTypography = styled(Typography)`
    color: red;
    text-align: center;
    margin-top: 16px;
`;

export const HeaderTypography = styled(Typography)`
    text-align: center;
    font-weight: bold;
    margin: 16px 0;
`;
