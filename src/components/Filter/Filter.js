import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ changeContactFilter, value }) => {
  return (
    <FilterContainer>
      Find contact by name
      <FilterLabel>
        <FilterInput
          value={value}
          onChange={changeContactFilter}
          placeholder="Find your contact"
        />
      </FilterLabel>
    </FilterContainer>
  );
};
