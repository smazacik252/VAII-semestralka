import {Container, Pagination} from "@mui/material";
import {styled} from "@mui/material/styles";

export const LatestArticlesStyled = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    width: 100%;
    padding: 0!important;
    gap: 15px;
`

export const PaginationStyled = styled(Pagination)`
    & .MuiPagination-ul {
        justify-content: center;
        gap: 8px; 
    }
    & .MuiPaginationItem-root {
        font-size: 1.2rem; 
        border-radius: 50%; 
        color: #417851; 
        &:hover {
            background-color: #356a43;
            color: #F5E4C1;
        }
    }
    & .Mui-selected {
        background-color: #417851 !important; 
        color: #F5E4C1 !important; 
    }
`;