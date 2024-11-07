import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
