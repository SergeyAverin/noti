import React from "react";

import { Table } from "@atoms/index";
import { Center } from "@atoms/index";

interface ILibraryTableProps {
  columns: string[],
  children: React.ReactNode;
}

export const LibraryTable: React.FC<ILibraryTableProps> = ({ columns, children }) => {
  return (
    <Center>
    <Table>
      <thead>
        <tr>
          { columns.map((column) => <th scope="col">{ column }</th>) }
        </tr>
      </thead>
      <tbody>
       { children  }
      </tbody>
    </Table>
    </Center>
  );
};
