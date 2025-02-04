import {StatCardStyled} from "./statCard.styled.tsx";

export const StatCard = () => {
  return(
      <StatCardStyled>
          <h3 className="value">Value</h3>
          <h3 className="name">Name</h3>
      </StatCardStyled>
  );
}