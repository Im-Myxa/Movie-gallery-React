/* eslint-disable arrow-body-style */
import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './favoriteFilms.module.scss';
import FilmCard from '../../components/FilmCard';

const FavouriteFilms = ({ films, onLike }) => {
  const filteredFilms = useMemo(() => {
    return films.filter((film) => film.liked);
  }, [films]);

  return (
    <div className={styles.favorite}>
      <Container fluid className={styles.container}>
        {filteredFilms.length === 0 ? (
          <h2>No Any Favorite Films...</h2>
        ) : (
          <Row>
            {filteredFilms.map((film) => {
              const { Title, Poster, Year, imdbID, liked } = film;
              return (
                <Col lg={4} key={imdbID}>
                  <FilmCard
                    Title={Title}
                    Poster={Poster}
                    Year={Year}
                    imdbID={imdbID}
                    liked={liked}
                    onLike={onLike}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default FavouriteFilms;
