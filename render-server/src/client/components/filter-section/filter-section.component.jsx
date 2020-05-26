import React from "react";
import { connect } from "react-redux";

import addFilter from "../../redux/selected-filters/add-filter.actions";
import removeFilter from "../../redux/selected-filters/remove-filter.actions";
import {
  FilterSectionContainer,
  FilterSectionList,
  FilterSectionTitle,
  FilterSectionListItem,
} from "./filter-section.styles";

const FilterSection = ({
  list,
  title,
  addFilter,
  removeFilter,
  selectedFilters,
}) => {
  const handleChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      addFilter({ filterType: title, value });
    } else {
      removeFilter({ filterType: title, value });
    }
  };
  return (
    <FilterSectionContainer>
      <FilterSectionTitle>{title}</FilterSectionTitle>
      <FilterSectionList>
        {list.map((item) => (
          <FilterSectionListItem key={item}>
            <label>
              <input
                type="checkbox"
                value={item}
                checked={selectedFilters[title].indexOf(item) !== -1}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {item}
            </label>
          </FilterSectionListItem>
        ))}
      </FilterSectionList>
    </FilterSectionContainer>
  );
};

const mapStateToProps = (state) => ({
  selectedFilters: state.selectedFilters,
});
const mapDispatchToProps = (dispatch) => ({
  addFilter: (filter) => dispatch(addFilter({ ...filter })),
  removeFilter: (filter) => dispatch(removeFilter({ ...filter })),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
