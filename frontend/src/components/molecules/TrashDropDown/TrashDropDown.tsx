import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { useGetTrashQuery } from "@redux/api/libraryApi";
import { DropDownMenu, Margin, NoteLink } from "@atoms/index";
import { SideBarTool } from "@atoms/SideBarTools/SideBarTool";

import TrashIcon from "@public/TrashIcon.svg";
import TableIcon from "@public/TableIcon.svg";
import { Link } from "react-router-dom";

export const TrashDropDown: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading } = useGetTrashQuery();

  return (
    <DropDownMenu text="Trash" icon={<TrashIcon stroke={theme?.color.fg} />}>
      <Margin ml={15} mb={5}>
        <Link to="/notes/trash">
          <SideBarTool
            icon={<TableIcon />}
            onClick={() => {}}
            text="Trash table"
          />
        </Link>
      </Margin>
      <Margin ml={18}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <NoteLink
              haveBackground={true}
              key={note.slug}
              href={`/notes/${note.slug}`}
            >
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>Trash is empty</div>}
      </Margin>
    </DropDownMenu>
  );
};
