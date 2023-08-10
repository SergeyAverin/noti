import React from "react";

import { INote } from "@redux/types/note";
import { Button, Center, Table } from "@atoms/index";
import { RemoveNote } from "@molecules/RemoveNote";
import { RestoreNote } from "@molecules/RestoreNote";

interface ITrashTableProps {
  notes: INote[];
}

export const TrashTable: React.FC<ITrashTableProps> = ({ notes }) => {
  return (
    <Center>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>remove trash</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {notes.map((note) => (
          <tr>
            <td>{note.title}</td>
            <td>
              <RestoreNote slug={note.slug} danger={true} />
            </td>
            <td>
              <RemoveNote slug={note.slug} danger={true} fill={true} />
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Center>
  );
};
