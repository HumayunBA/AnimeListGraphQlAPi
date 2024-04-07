
import React from 'react';
import { render, act } from '@testing-library/react';
import Page from './Page';
import axios from 'axios'; 

jest.mock('axios'); 

test('Page fetches and displays search results', async () => {
  const mockResponseData = {
    data: [
      {
        mal_id: 1,
        title: 'Naruto',
      },
    ],
  };
  axios.get.mockResolvedValueOnce(mockResponseData);

  const { getByText } = await render(<Page />);

  
  const searchInput = getByText(/search for anime.../i);
  fireEvent.change(searchInput, { target: { value: 'naruto' } });

 
  await act(() => new Promise((resolve) => setTimeout(resolve, 1000)));

  
  expect(getByText(/naruto/i)).toBeInTheDocument(); 
});
