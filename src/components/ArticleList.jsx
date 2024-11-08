import { ArticleCard } from "./ArticleCard";
import Skeleton from "@mui/material/Skeleton";

export function ArticleList({ articles, isLoading }) {
  if (isLoading) {
    return (
      <ul className="article_list">
        {articles.map((x) => {
          return (
            <li>
              <Skeleton
                variant="rectangular"
                className="article_card"
                height={400}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="article_list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
