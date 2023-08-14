import React from "react";

import { ICell } from "@redux/types/cell";

interface ICellListProps {
    cell: ICell
}

export const CellList: React.FC<ICellListProps> = ({ cell }) => {
    return (
        <div>   
            { cell.children }
            <ul>
                <li>sa</li>
                <li>sa</li>
                <li>sa</li>
            </ul>
        </div>
    )
}