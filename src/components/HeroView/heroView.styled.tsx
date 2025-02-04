import {styled} from "@mui/material/styles";
import {Container} from "@mui/material";

export const HeroViewStyled = styled(Container)`
    height: 100%;
    color:#F5E4C1;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);

    .container{
        display: flex;
        flex-direction: column;
    }
    
    .up-container{
        display: flex;
        flex-direction: row;
    }
    
    .left-container{
        flex: 0.5;
        
        .stats-container {
            display: flex;
            flex-direction: row;
            gap: 10px;
            .stat-container {
                flex: 0.5;
                .cards-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
            }
        }
        
    }    
    
    .right-container {
        flex: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            height: auto;
        }
    }
    
    p {
        background: rgba(0, 0, 0, 0.6);
        color: #F5E4C1;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 15px;
        border-radius: 8px;
    }
    
`;