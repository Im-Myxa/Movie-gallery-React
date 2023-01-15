import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AllFilmsPage from 'pages/allFilms';
import FavoriteFilms from 'pages/favoriteFilms';
import FilmPage from 'pages/filmPage';
import MainLayout from 'layout/MainLayout';
// import NavBar from 'NavBar';
import { useFilms } from 'hooks/useGetFilms';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const { data, loading, handleLike } = useFilms();

  return (
    <BrowserRouter>
      <MainLayout>
        {loading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route path="/" exact>
              <AllFilmsPage films={data} onLike={handleLike} />
            </Route>
            <Route path="/favorite">
              <FavoriteFilms films={data} onLike={handleLike} />
            </Route>
            <Route path="/film/:id">
              <FilmPage films={data} onLike={handleLike} />
            </Route>
            <Redirect to="/" films={data} />
          </Switch>
        )}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
