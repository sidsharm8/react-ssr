import React from "react";
import FilterPanel from "../../components/filter-panel/filter-panel.component";
import SelectedFilters from "../../components/selected-filters/selected-filters.component";
import SearchByName from "../../components/search-by-name/search-by-name.component";
import CharacterList from "../../components/character-list/character-list.component";
import Sort from "../../components/sort/sort.component";

import fetchCharacters from "../../redux/characters-list/characters.actions";

import { CharactersPageContainer } from "./characterspage.styles";


const CharactersPage = () => {
    return (
      <CharactersPageContainer>
        <section className="characters-filter-panel">
          <FilterPanel />
        </section>
        <section className="characters-selected-filters-list">
          <SelectedFilters />
          <div className="characters-search-sort">
            <SearchByName />
            <Sort />
          </div>

          <CharacterList />
        </section>
      </CharactersPageContainer>
    );
}

const loadData = ({dispatch }) => {
  return dispatch(fetchCharacters());
}
export default {component: CharactersPage, loadData};
