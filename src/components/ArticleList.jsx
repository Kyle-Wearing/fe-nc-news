import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles, isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
