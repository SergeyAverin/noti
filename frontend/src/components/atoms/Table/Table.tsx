import { styled } from "styled-components";

export const Table = styled.form`
  width: 100%;
  display: block;
  border: 4px solid #18181d;
  color: ${(props) => props.theme.color.fg};
  background-color: ${(props) => props.theme.color.primary};

  tr {
    border-top: 1px solid ${(props) => props.theme.color.primary};
  }

  th,
  td {
    padding: 20px;
  }

  tbody tr:nth-child(odd) {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.fg};
  }

  tbody tr:nth-child(even) {
    background-color: ${(props) => props.theme.color.bg};
    color: ${(props) => props.theme.color.fg};
  }

  thead tr {
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.fg};
  }

  tr.active th {
    background-color: ${(props) => props.theme.color.highlightFaded};
    border-top: 1px solid ${(props) => props.theme.color.highlightFaded};
    color: ${(props) => props.theme.color.fg};
    // box-shadow: 0px 1px 20px 3px rgba(96, 126, 170, 0.4);
    transition: box-shadow 0.3s;
  }
`;
