import React from "react";
import { Link } from "react-router-dom";

import {
  BreadcrumbsStyled,
  ContentStyled,
  SearchItemStyled,
  SearchItemTitleStyled,
} from "./SearchItemStyled";
import { TextMarker } from "./TextMarker";
import { Icon } from "@atoms/index";

import NoteIcon from "@public/NoteIcon.svg";

interface ISearchItemPresentationalProps {
  title: string;
  content: string;
  searchString: string;
  slug: string;
}

export const SearchItemPresentational: React.FC<
  ISearchItemPresentationalProps
> = ({ content, title, searchString, slug }) => {
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
