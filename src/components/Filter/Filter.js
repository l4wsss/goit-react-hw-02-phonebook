import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ changeContactFilter, filter }) => {
  return (
    <FilterContainer>
      Find contact by name
      <FilterLabel>
        <FilterInput
          value={filter}
          onChange={changeContactFilter}
          placeholder="Find your contact"
        />
      </FilterLabel>
    </FilterContainer>
  );
};
