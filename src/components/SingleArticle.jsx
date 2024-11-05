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
    <div
      onClick={() => {
        navigate(-1);
      }}
    >
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h5>{created_at}</h5>
      <h5>{votes}</h5>
      <img src={article_img_url} />
      <p>{body}</p>
      <Comments />
    </div>
  );
}
