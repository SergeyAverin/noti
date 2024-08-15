import React from "react";

import { SearchItemPresentational } from "./SearchItemPresentational";

interface ISearchItemContainerProps {
  title: string;
  content: string;
  searchString: string;
  slug: string;
}

export const SearchItemContainer: React.FC<ISearchItemContainerProps> = ({
  content,
  title,
  searchString,
  slug,
}) => {
  return (
    <SearchItemPresentational
      content={content}
      title={title}
      searchString={searchString}
      slug={slug}
    />
  );
};
