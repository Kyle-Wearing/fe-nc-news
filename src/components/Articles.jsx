import { ControlBar } from "./ControlBar";
import { ArticleList } from "./ArticleList";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";

export function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <>
      <ControlBar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        articles={articles}
        page={page}
        isLoading={isLoading}
      />
      <ArticleList isLoading={isLoading} articles={articles} />
    </>
  );
}
