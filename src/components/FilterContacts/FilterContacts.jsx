import React from "react";
import { LabelFilter, InputFilter, LabelSpan } from "./FilterContacts.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/selectors";
import { changedFilter } from "redux/filterSlice";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <LabelFilter>
      <LabelSpan> <PersonSearchIcon /> Searching contact</LabelSpan>
      <InputFilter
        type="text"
        value={filter}
        name="filter"
        placeholder="Enter name contact"
        onChange={evt => dispatch(changedFilter(evt.target.value.trim()))} 
      />
    </LabelFilter>
  );
};

export default FilterContacts;