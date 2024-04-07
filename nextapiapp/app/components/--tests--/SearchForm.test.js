
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

test('SearchForm updates search term on input change', () => {
  const mockOnSearch = jest.fn(); 
  const { getByLabelText } = render(<SearchForm searchTerm="" onSearch={mockOnSearch} updateSearchTerm={() => {}} />);

  const searchInput = getByLabelText(/search for anime.../i);
  fireEvent.change(searchInput, { target: { value: 'naruto' } });

  expect(searchInput.value).toBe('naruto');

  expect(mockOnSearch).toHaveBeenCalledWith('naruto');
});
