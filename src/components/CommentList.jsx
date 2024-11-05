import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsByArticle } from "../../api";
import { useParams } from "react-router-dom";

export function CommentList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticle(article_id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li className="comment_list" key={comment.comment_id}>
            <CommentCard comment={comment} />
          </li>
        );
      })}
    </ul>
  );
}
