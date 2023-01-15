/* eslint-disable arrow-body-style */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './allFilms.module.scss';
import FilmCard from '../../components/FilmCard';

const AllFilmsPage = ({ films, onLike }) => {
  return (
    <div className={styles.allFilms}>
      <Container fluid className={styles.container}>
        <Row>
          {films.map((film) => {
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
      </Container>
    </div>
  );

  // (
  //   <div>
  //     {films.map((film) => {
  //       <div key={film.imdbID}>
  //         <img src={film.Poster} />
  //       </div>;
  //     })}
  //   </div>
  // );
};

export default AllFilmsPage;
