import React from "react";

import { NoteLink } from "@atoms/index";
import { INote } from "@redux/types/note";

interface IRootNotesPresentationalProps {
  notes: Array<INote> | undefined;
  isLoading: boolean;
}

export const RootNotesPresentational: React.FC<
  IRootNotesPresentationalProps
> = ({ notes, isLoading }) => {
  return (
    <div>
      {!isLoading &&
        notes &&
        notes
          .slice()
          .reverse()
          .map((note) => (
            <NoteLink
              haveBackground={true}
              href={`/notes/${note.slug}`}
              key={note.slug}
            >
              {note.title}
            </NoteLink>
          ))}
    </div>
  );
};
