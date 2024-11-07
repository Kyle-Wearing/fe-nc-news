import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles }) {
  return (
    <ul className="article_list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
