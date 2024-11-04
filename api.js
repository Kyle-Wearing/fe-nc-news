import axios from "axios";

const api = axios.create({
  baseURL: "https://kyle-wearing-be-nc-news.onrender.com/api",
});

export function getArticles(page) {
  let queryStr = "?";
  if (page) {
    queryStr += `p=${page}`;
  }
  return api.get(`/articles${queryStr}`).then((response) => {
    return response.data.articles;
  });
}
