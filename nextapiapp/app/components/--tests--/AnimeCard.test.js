
import React from 'react';
import { render } from '@testing-library/react';
import AnimeCard from './AnimeCard';

const mockAnimeData = {
  mal_id: 1,
  title: 'Naruto',
  images: {
    jpg: {
      image_url: 'https://example.com/naruto.jpg',
    },
  },
};

test('AnimeCard displays anime title and image', () => {
  const { getByText, getByAltText } = render(<AnimeCard anime={mockAnimeData} />);

  const titleElement = getByText(/naruto/i);
  const imageElement = getByAltText(/naruto/i);

  expect(titleElement).toBeInTheDocument();
  expect(imageElement.src).toBe(mockAnimeData.images.jpg.image_url);
});
