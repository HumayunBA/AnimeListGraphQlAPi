import React from 'react';

const AnimeCard = ({ anime }) => {
  const imageUrl = anime.images.jpg.image_url;

  return (
    <div className="anime-card">
      <a href={`/anime/${anime.mal_id}`}> 
        <img src={imageUrl} alt={anime.title} className="anime-image" />
        <h3 className="anime-title">{anime.title}</h3>
      </a>
    </div>
  );
};

export default AnimeCard;
