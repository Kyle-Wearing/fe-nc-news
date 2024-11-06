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
    <div className="article_card">
      <Link to={`/articles/${article_id}`}>
        <li>
          <h4>{title}</h4>
          <h5>posted by: {author}</h5>
          <p>{new Date(created_at).toLocaleString()}</p>
          <img className="article_img" src={article_img_url} />
          <p>votes: {votes}</p>
          <p>comments: {comment_count}</p>
        </li>
      </Link>
    </div>
  );
}
