import { ControlBar } from "./ControlBar";
import { ArticleList } from "./ArticleList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";

export function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const topic = searchParams.get("topic");
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setSearchParams("page=1&topic=");
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page, topic).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [page, topic]);

  return (
    <>
      <ControlBar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        articles={articles}
        page={page}
        isLoading={isLoading}
      />
      <h1>Showing all {topic ? topic : null} topics</h1>
      <ArticleList isLoading={isLoading} articles={articles} />
    </>
  );
}
