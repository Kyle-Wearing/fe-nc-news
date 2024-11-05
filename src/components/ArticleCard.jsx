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
        <p>{author}</p>
        <img className="article_img" src={article_img_url} />
        <p>{votes}</p>
        <p>{comment_count}</p>
        <p>{created_at}</p>
      </li>
    </Link>
  );
}
