import { ControlBar } from "./ControlBar";
import { ArticleList } from "./ArticleList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";

export function Articles() {
  const [searchParams, setSearchParams] = useSearchParams(
    "page=1&sort_by=created_at&order=desc&topic="
  );

  const page = searchParams.get("page") || 1;
  const topic = searchParams.get("topic") || null;
  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

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
        isLoading={isLoading}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        articles={articles}
        page={page}
      />
      {isLoading ? (
        <CircularProgress className="loading" />
      ) : (
        <h1>Showing all {topic ? topic : null} articles</h1>
      )}
      {<ArticleList articles={articles} isLoading={isLoading} />}
    </>
  );
}
