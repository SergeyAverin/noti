/** This hook return function to call search function on change input */
export const useSearchInput = (
  searchString: string,
  setSearchString: Function,
  onSearch: Function
) => {
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    onSearch(searchString);
  };

  return search;
};
