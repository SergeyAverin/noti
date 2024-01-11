import styled from "styled-components";

export const EditorStyled = styled.div`
  div[contentEditable="true"] {
    border: 0;
    outline: 0;
    &:empty:before {
      content: attr(placeholder);
      pointer-events: none;
      display: block;
      color: ${(props) => props.theme.propertyColor.fg.grey};
    }
  }
`;
