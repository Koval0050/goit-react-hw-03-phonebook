import React from "react";
import PropTypes from "prop-types";
import { SearchName, SearchInput, SearhField } from "./search.styled";

export const Search = ({ filter, onChange }) => {
  return (
    <SearhField>
      <SearchName>
        {/* {text} */}
        <SearchInput value={filter} onChange={onChange}></SearchInput>
      </SearchName>
    </SearhField>
  );
};

Search.propTypes = {
  // text: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
