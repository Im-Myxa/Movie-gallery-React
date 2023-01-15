/* eslint-disable arrow-body-style */

import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import styles from './filmPage.module.scss';
import FilmCard from '../../components/FilmCard';

const FilmPage = ({ films, onLike }) => {
  const { id } = useParams();

  const filmData = useMemo(() => {
    return films.find((film) => film.imdbID === id);
  }, [id, films]);

  return (
    <div className={styles.filmPage}>
      <Container fluid className={styles.container}>
        {filmData ? (
          <FilmCard
            onLike={onLike}
            Title={filmData.Title}
            Poster={filmData.Poster}
            Year={filmData.Year}
            imdbID={filmData.imdbID}
            liked={filmData.liked}
          />
        ) : (
          <h2>No Any Film...</h2>
        )}
        <div className={styles.btn}>
          <Link to="/">
            <Button className="btn-secondary">Back to All films</Button>
          </Link>
          <Link to="/favorite">
            <Button className="btn-secondary">Back to Favorite films</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FilmPage;
