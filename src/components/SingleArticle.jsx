import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";

export function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getArticleById(Number(article_id)).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { title, author, body, article_img_url, created_at, votes } = article;

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
      <h1>{title}</h1>
      <h2>posted by: {author}</h2>
      <h5>date: {created_at}</h5>
      <img className="singl_article_img" src={article_img_url} />
      <p>{body}</p>
      <h5>votes: {votes}</h5>
      <Comments />
    </div>
  );
}
