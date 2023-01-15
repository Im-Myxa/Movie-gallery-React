import React from 'react';
import { Link } from 'react-router-dom';

import favourite from '../../assets/img/favourite.png';
import notFavourite from '../../assets/img/notFavourite.png';
import styles from './filmCard.module.scss';

function FilmCard({ Poster, Title, Year, imdbID, onLike, liked }) {
  const handleLike = (imdbID) => () => {
    onLike(imdbID);
  };

  return (
    <div className={styles.card}>
      <Link to={`/film/${imdbID}`} className={styles.link}>
        <img src={Poster} alt={Title} className={styles.img} />
        <h2 className={styles.title}>{Title}</h2>
      </Link>
      <p className={styles.year}>{Year}</p>
      <button type="button" className={styles.likedBtn} onClick={handleLike(imdbID)}>
        <img src={liked ? favourite : notFavourite} alt={Title} className={styles.liked} />
      </button>
    </div>
  );
}

export default FilmCard;
