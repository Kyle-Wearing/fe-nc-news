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

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

export function getCommentsByArticle(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

export function patchArticleById(article_id, inc_votes) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response;
    });
}

export function postCommentByArticleId(article_id, username, body) {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    });
}

export function deleteCommentById(comment_id) {
  return api.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
}

export function getUserByUsername(username) {
  return api.get(`/users/${username}`).then((response) => {
    return response.data.user.username;
  });
}

export function createNewUser(username, name) {
  return api
    .post("/users", {
      username,
      name,
    })
    .then((response) => {
      return response.data.user.username;
    });
}
