import React from "react";
import styled from "styled-components";

import { Flex } from "@atoms/index";
import { ICell } from "@redux/types/cell";


interface ICheckBoxProps {
  cell: ICell;
  setValue: (event: React.FocusEvent<HTMLHeadingElement, Element>) => void
}
const CheckBoxStyled = styled.input.attrs({type: 'checkbox'})`
    margin-right: 5px;
`
export const CheckBox: React.FC<ICheckBoxProps> = ({ cell, setValue }) => {
  return (
    <Flex justifyContent="flex-start" alignItems="center"  data-cell-type={cell.type} >
    <CheckBoxStyled type="checkbox" checked={false}/>
      <div contentEditable={true} onBlur={setValue}>
        {cell.children}
      </div>
    </Flex>
  );
};

/*
         color={cell.property.color}
          styleMode={cell.property.styleMode}
*/
