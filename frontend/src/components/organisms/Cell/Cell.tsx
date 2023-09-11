import React from "react";

import { CellSelection } from "./CellSelection";
import { ICell } from "@redux/types/cell";


interface ICellProps {
    cell: ICell
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
    return (
        <>
            <CellSelection cell={cell} />
        </>
    )
}
