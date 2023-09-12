import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellSelection } from "./CellSelection";
import { ICell } from "@redux/types/cell";
import { selectCell, addCell } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";
import { CellStyled } from "./CellStyled";


interface ICellProps {
    cell: ICell
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
    const dispatch = useDispatch()
    const activeCell = useSelector((state: RootState) => state.noteState.selectedCell)
    const onClick: React.MouseEventHandler = () => {
        dispatch(selectCell(cell))
    }
    return (
        <CellStyled isActive={activeCell != undefined && activeCell.id == cell.id}>
            <CellSelection cell={cell} onClick={onClick} />
        </CellStyled>
    )
}
