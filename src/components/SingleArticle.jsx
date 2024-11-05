import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";

export function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(Number(article_id)).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);
  console.log(article);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
}
