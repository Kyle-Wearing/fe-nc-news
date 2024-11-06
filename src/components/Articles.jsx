import { ControlBar } from "./ControlBar";
import { ArticleList } from "./ArticleList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";

export function Articles() {
  const [searchParams, setSearchParams] = useSearchParams(
    "page=1&sort_by=created_at&order=desc&topic="
  );
  const page = searchParams.get("page");
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page, sort_by, order, topic).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <>
      <ControlBar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        articles={articles}
        page={page}
        isLoading={isLoading}
      />
      <h1>Showing all {topic ? topic : null} articles</h1>
      <ArticleList isLoading={isLoading} articles={articles} />
    </>
  );
}
