import React from "react";
import styled from "styled-components";


export interface IIconProps {
  /** SVG icon */
  icon: React.ReactNode
}

const IconStyled = styled.div`
  color: ${props => props.theme.color.fg};
  stroke: ${props => props.theme.color.fg};
  fill: ${props => props.theme.color.fg};
`

/** This component added color in svg icons  */
export const Icon: React.FC<IIconProps> = ({ icon }) => {
  return (
    <IconStyled>
        { icon }
    </IconStyled>
  )
}
