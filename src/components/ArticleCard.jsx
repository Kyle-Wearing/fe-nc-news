import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

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

  const navigate = useNavigate();

  return (
    <Card
      className="article_card"
      onClick={() => navigate(`/articles/${article_id}`)}
    >
      <CardActionArea className="article_img_container">
        <div className="article_img_container">
          <CardMedia
            className="article_img"
            component="img"
            image={article_img_url}
            alt="image related to article"
          />
        </div>
        <div className="articles_contents">
          <p className="article_title">{title}</p>
          <p className="article_author">by: {author}</p>
          <p className="article_date">
            date: {new Date(created_at).toLocaleString()}
          </p>
          <p className="article_votes">votes: {votes}</p>
          <p className="article_comments">comments: {comment_count}</p>
        </div>
      </CardActionArea>
    </Card>
  );
}
