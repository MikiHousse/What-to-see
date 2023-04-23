import { ALL_GENRES } from "./const";

export const starArr = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
};

export const filtrMovieList = (list, genre) => {
  if (genre === ALL_GENRES) {
    return list;
  }
  return list.filter((item) => item.genre === genre);
};
