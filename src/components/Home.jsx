import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList";
import { getArticles } from "../../api";

export function Home() {
  const [HomeArticles, setHomeArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((response) => {
      setHomeArticles(response);
      setIsLoading(false);
    });
  }, []);
  return <ArticleList isLoading={isLoading} articles={HomeArticles} />;
}
