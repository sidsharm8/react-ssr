import React from "react";
//import "./filter-panel.styles.scss";
import FilterSection from "../filter-section/filter-section.component";
import { FilterPanelContainer, FilterPanelHeader } from "./filter-panel.styles";
const filters = [
  {
    title: "species",
    list: ["Human", "Mytholog", "Other Species..."],
  },
  {
    title: "gender",
    list: ["Male", "Female"],
  },
  {
    title: "origin",
    list: ["Unknown", "Post-Apocalyptic Earth", "Nuptia 4", "Other Origins..."],
  },
];
const FilterPanel = () => {
  return (
    <FilterPanelContainer>
      <FilterPanelHeader>
        <h2>Filters</h2>
      </FilterPanelHeader>
      {filters.map(({ title, list }) => (
        <FilterSection key={title} title={title} list={list} />
      ))}
    </FilterPanelContainer>
  );
};

export default FilterPanel;
