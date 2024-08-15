import { INoteFromSearch, useSearchNoteMutation } from "@redux/api/searchApi";
import { useState } from "react";


/** This hook return search function and search result */
export const useSearch = (): [Function, Array<INoteFromSearch>] => {
  const [searchResult, setSearchResult] = useState<Array<INoteFromSearch>>([]);
  const [searchNote] = useSearchNoteMutation();
  const onSearch = (searchString: string) => {
    searchNote(searchString)
      .unwrap()
      .then((data) => {
        console.log(data.notes);
        setSearchResult([...data.notes]);
      });
  };

  return [onSearch, searchResult];
};
