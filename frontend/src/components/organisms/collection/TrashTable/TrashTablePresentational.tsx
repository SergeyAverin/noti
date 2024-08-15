import React from "react";

import { INote } from "@redux/types/note";
import { Center, Table } from "@atoms/index";
import RemoveNote from "@molecules/collection/RemoveNote";
import RestoreNote from "@molecules/collection/RestoreNote";

interface ITrashTablePresentationalProps {
  notes: Array<INote>;
}

export const TrashTablePresentational: React.FC<
  ITrashTablePresentationalProps
> = ({ notes }) => {
  return (
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
                <RestoreNote slug={note.slug} />
              </td>
              <td>
                <RemoveNote slug={note.slug} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};
