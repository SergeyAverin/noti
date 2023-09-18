import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellSelection } from "./CellSelection";
import { CellStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { selectCell } from "@redux/features/noteSlice";
import { selectedCellSelector } from "@redux/selectors/note";

interface ICellProps {
    cell: ICell
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
    const dispatch = useDispatch()
    const activeCell = useSelector(selectedCellSelector)

    const onClick: React.MouseEventHandler = () => {
        dispatch(selectCell(cell))
    }
    
    return (
        <CellStyled isActive={activeCell != undefined && activeCell.id == cell.id}>
            <CellSelection cell={cell} onClick={onClick} />
        </CellStyled>
    )
}
