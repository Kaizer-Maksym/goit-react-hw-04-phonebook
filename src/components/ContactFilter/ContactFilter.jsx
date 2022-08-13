import React, { useState } from 'react';
import {
  FilterText,
  FilterInput,
  FilterContainer,
} from './ContactFilter.styled';
import PropTypes from 'prop-types';

export const ContactFilter = ({ value, onChange }) => {
  const [className, setClassName] = useState('');

  const onFocus = e => {
    setClassName('focus');
  };
  const onBlur = e => {
    setClassName('');
  };

  return (
    <FilterContainer>
      <FilterText className={className} htmlFor="filter">
        Find contacts by name
      </FilterText>
      <FilterInput
        onFocus={onFocus}
        onBlur={onBlur}
        id="filter"
        type="text"
        onChange={onChange}
        value={value}
      />
    </FilterContainer>
  );
};

ContactFilter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
