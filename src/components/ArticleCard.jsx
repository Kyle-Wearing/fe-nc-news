import { Link } from "react-router-dom";

export function ArticleCard({ article }) {
  const {
    author,
    title,
    created_at,
    votes,
    article_img_url,
    comment_count,
    article_id,
  } = article;

  return (
    <Link to={`/articles/${article_id}`}>
      <li className="article_card">
        <h4>{title}</h4>
        <p>posted by: {author}</p>
        <p>date: {created_at}</p>
        <img className="article_img" src={article_img_url} />
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </li>
    </Link>
  );
}
