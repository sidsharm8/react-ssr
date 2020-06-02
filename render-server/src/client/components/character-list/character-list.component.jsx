import React from "react";
import { debounce, throttle } from "lodash";
import { connect } from "react-redux";
import CharacterCard from "../character-card/character-card.component";
import fetchCharacters, { setNextPage } from "../../redux/characters-list/characters.actions";
import { CharacterListContainer } from "./character-list.styles";
import WithSpinner from "../withspinner/withspinner.component";

const checkIfSelectedFiltersChanged = (oldFilters, newFilters) => {
  let len1 = 0, len2 = 0;
  Object.keys(oldFilters).map(key => len1 += oldFilters[key].length);
  Object.keys(newFilters).map(key => len2 += newFilters[key].length);
  return len1 !== len2;
}

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    /* debounce this function to prevent unnecessary function calls on search and filter change */
    const { fetchData } = this.props;
    this.debouncedFetchData = debounce(fetchData.bind(this), 500);
    /* throttle scroll event for lazy loading list */
    this.throttledHandleOnScroll = throttle(
      this.handleOnScroll.bind(this),
      500
    );
    setTimeout(() => {
      window.addEventListener("scroll", this.throttledHandleOnScroll);
    }, 1000);

  }
  componentDidUpdate( { selectedFilters, searchText, sortOrder} ) {
    // Typical usage (don't forget to compare props):
    const { selectedFilters: currentSelectedFilters, searchText: currentSearchText, sortOrder: currentSortOrder } = this.props;
    if (
        currentSearchText !== searchText ||
        currentSortOrder !== sortOrder ||
        checkIfSelectedFiltersChanged(selectedFilters, currentSelectedFilters)
      ) {
        this.debouncedFetchData();
      }
  }
  handleOnScroll() {
    /* user has scrolled to the bottom of the page */
    if (
      document.body.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      const { fetchData, setNextPage, nextPage } = this.props;
      setNextPage(nextPage + 1);
      fetchData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledHandleOnScroll);
  }
  render() {
    const { characterList, loading } = this.props;
    return (
        <CharacterListContainer>
          {characterList ? characterList.map((character) => (
            <CharacterCard key={character.id} character={character} />
          )): ""}
        </CharacterListContainer>
    );
  }
}

const mapStateToProps = ( { selectedFilters, searchText, sortType, characters: { list, nextPage } }) => ({
  selectedFilters,
  searchText,
  sortOrder: sortType,
  characterList: list,
  nextPage
});
const mapDispatchToProps = (dispatch) => ({
  fetchData : () => dispatch(fetchCharacters()),
  setNextPage : (nextPage) => dispatch(setNextPage(nextPage))
});
export default connect(mapStateToProps, mapDispatchToProps)(WithSpinner(CharacterList));
