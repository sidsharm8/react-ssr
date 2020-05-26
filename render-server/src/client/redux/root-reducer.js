import { combineReducers } from "redux";

import selectedFiltersReducer from "./selected-filters/selected-filters.reducer";
import searchTextReducer from "./search-text/search-text.reducer";
import sortReducer from "./sort/sort.reducer";
import charactersReducer from "./characters-list/characters.reducer";

const rootReducer = combineReducers({
  selectedFilters: selectedFiltersReducer,
  searchText: searchTextReducer,
  sortType: sortReducer,
  characters: charactersReducer
});

export default rootReducer;
