"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/* for (let i = 0; i < 2; i++) {
  const A = prompt("Один из последних просмотренных фильмов?", ""),
        B = prompt("На сколько оцените его?", "");

  if (A != null && B != null && A != "" && B != "" &&
      A.length <= 50 && B.length <= 50) {
    personalMovieDB.movies[A] = B;
  } else {
    i--;
  }
} */

/* let i = 0;
while (i < 2) {
  const A = prompt("Один из последних просмотренных фильмов?", ""),
        B = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[A] = B;
        i++;
} */

let i = 0;
do {
  const A = prompt("Один из последних просмотренных фильмов?", ""),
        B = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[A] = B;
        i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);