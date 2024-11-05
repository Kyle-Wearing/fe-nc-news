import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles, isLoading }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
