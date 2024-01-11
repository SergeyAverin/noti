import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { useGetTrashQuery } from "@redux/api/libraryApi";
import { DropDownMenu, Icon, Margin, NoteLink } from "@atoms/index";
import { SideBarTool } from "@atoms/ui/SideBarTools/SideBarTool";

import TrashIcon from "@public/TrashIcon.svg";
import TableIcon from "@public/TableIcon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TrashDropDown: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading } = useGetTrashQuery();
  const { t } = useTranslation()

  return (
    <DropDownMenu text={t('trash')} icon={<Icon icon={<TrashIcon stroke={theme?.color.fg} />} />}>
      <Margin ml={15} mb={5}>
        <Link to="/notes/trash">
          <SideBarTool
            icon={<Icon icon={<TableIcon />} />}
            onClick={() => {}}
            text={t('trashTable')}
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
        {!isLoading && data?.length == 0 && <div>{t('trashEmpty')}</div>}
      </Margin>
    </DropDownMenu>
  );
};
