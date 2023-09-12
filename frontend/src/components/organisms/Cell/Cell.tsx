import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CellSelection } from "./CellSelection";
import { ICell } from "@redux/types/cell";
import { selectCell, addCell } from "@redux/features/noteSlice";


interface ICellProps {
    cell: ICell
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
    const dispatch = useDispatch()
    const onClick: React.MouseEventHandler = () => {
        dispatch(selectCell(cell))
    }
    return (
        <>
            <CellSelection cell={cell} onClick={onClick} />
        </>
    )
}
