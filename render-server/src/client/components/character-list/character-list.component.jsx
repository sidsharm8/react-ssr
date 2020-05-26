import React from "react";
import { debounce, throttle } from "lodash";
import { connect } from "react-redux";
import CharacterCard from "../character-card/character-card.component";
import fetchCharacters from "../../redux/characters-list/characters.actions";
import { CharacterListContainer } from "./character-list.styles";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    /* debounce this function to prevent unnecessary function calls on search and filter change */
    const { fetchData } = this.props;
    this.debouncedFetchData = debounce(fetchData.bind(this), 500);
    this.debouncedFetchData();
    /* throttle scroll event for lazy loading list */
    this.throttledHandleOnScroll = throttle(
      this.handleOnScroll.bind(this),
      500
    );
    setTimeout(() => {
      window.addEventListener("scroll", this.throttledHandleOnScroll);
    }, 1000);
  }

  handleOnScroll() {
    /* user has scrolled to the bottom of the page */
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      if (this.nextUrl) this.debouncedFetchData(this.nextUrl);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledHandleOnScroll);
  }
  render() {
    const { characterList } = this.props;
    return (
        <CharacterListContainer>
          {characterList ? characterList.map((character) => (
            <CharacterCard key={character.id} character={character} />
          )): ""}
        </CharacterListContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilters: state.selectedFilters,
  searchText: state.searchText,
  sortOrder: state.sortType,
  characterList: state.characters.list
});
const mapDispatchToProps = (dispatch) => ({
  fetchData : (characterList) => dispatch(fetchCharacters(characterList))
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
