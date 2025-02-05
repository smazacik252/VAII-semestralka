import {StatCardStyled} from "./statCard.styled.tsx";
import React from "react";

type StatCardProps = {
    statName: string;
    statValue: number;
}


export const StatCard: React.FC<StatCardProps> = ({statName, statValue}) => {
  return(
      <StatCardStyled>
          <h4 className="value">{statValue}</h4>
          <h4 className="name">{statName}</h4>
      </StatCardStyled>
  );
}