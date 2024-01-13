import React from "react";

import NoteIcon from "@public/NoteIcon.svg";
import {
  BreadcrumbsStyled,
  ContentStyled,
  SearchItemStyled,
  SearchItemTitleStyled,
} from "./SearchItemStyled";
import { TextMarker } from "./TextMarker";
import { Link } from "react-router-dom";
import { Icon } from "@atoms/index";

interface ISearchItemProps {
  title: string;
  content: string;
  searchString: string;
  slug: string;
}

export const SearchItem: React.FC<ISearchItemProps> = ({
  content,
  title,
  searchString,
  slug,
}) => {
  return (
    <Link to={`/notes/${slug}`}>
      <SearchItemStyled>
        <SearchItemTitleStyled>
          <Icon icon={<NoteIcon />} />
          <TextMarker text={title} markerString={searchString} />
        </SearchItemTitleStyled>
        <BreadcrumbsStyled>/note/page</BreadcrumbsStyled>
        <ContentStyled>
          <TextMarker text={content} markerString={searchString} />
        </ContentStyled>
      </SearchItemStyled>
    </Link>
  );
};
