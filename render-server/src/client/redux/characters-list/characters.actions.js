const setCharacters = (characters) => ({
  type : "SET_CHARACTERS",
  payload: characters
});
const setNextPage = (nextPage) => ({
  type : "SET_NEXT_PAGE",
  payload: nextPage
});


const API_URL = "https://rickandmortyapi.com/api/character/";
const nonOtherSpecies = ["Human", "Mytholog"];
const nonOtherOrigins = ["Uknown", "Post-Apocalyptic Earth", "Nuptia 4"];

const fetchCharacters = (characterList = []) => async (dispatch, getState, api) => {
  const res = await api(API_URL);
  dispatch(setCharacters(res.data.results || []));
  dispatch(setNextPage(res.data.info.next || ""));
}

export default fetchCharacters;
