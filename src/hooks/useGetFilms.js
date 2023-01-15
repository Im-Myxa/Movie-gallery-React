/* eslint-disable arrow-body-style */
import { useCallback, useEffect, useState } from 'react';

const baseURL = 'https://www.omdbapi.com/?s=marvel&apikey=9b67fc54';

function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '{}');
}

export function useFilms() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function formatResponse(dataFromServer) {
    return dataFromServer.Search.map((film) => {
      const dataFromStorage = getFromLocalStorage('likedFilms');
      return { ...film, liked: dataFromStorage[film.imdbID] || false };
    });
  }

  useEffect(() => {
    setLoading(true);
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => {
        const formatData = formatResponse(result);
        setData(formatData);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, []);

  const handleLike = useCallback((imdbID) => {
    setData((prev) => {
      return prev.map((film) => {
        if (film.imdbID === imdbID) {
          return { ...film, liked: !film.liked };
        }
        return film;
      });
    });

    const likedFromStorage = getFromLocalStorage('likedFilms');

    if (likedFromStorage[imdbID]) {
      likedFromStorage[imdbID] = false;
    } else {
      likedFromStorage[imdbID] = true;
    }

    setToLocalStorage('likedFilms', likedFromStorage);
  }, []);

  return { data, loading, handleLike };
}
