"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const A = prompt("Один из последних просмотренных фильмов?", ""),
      B = prompt("На сколько оцените его?", ""),
      C = prompt("Один из последних просмотренных фильмов?", ""),
      D = prompt("На сколько оцените его?", "");

personalMovieDB.movies[A] = B;
personalMovieDB.movies[C] = D;

console.log(personalMovieDB);

