import { useState } from "react";
import { deleteCommentById } from "../../api";

export function CommentCard(props) {
  const { username } = useContext(UsernameContext);
  const { author, body, created_at, votes, comment_id } = props.comment;
  const { setComments } = props;

  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete(id) {
    setIsDeleting(true);
    return deleteCommentById(id).then((resposne) => {
      setComments((currComments) => {
        const commentToRemove = currComments.findIndex(
          (comment) => comment.comment_id === id
        );

        const newComments = [...currComments];

        newComments.splice(commentToRemove, 1);

        return newComments;
      });
      setIsDeleting(false);
    });
  }

  if (isDeleting) {
    return <h1>Deleting comment...</h1>;
  }

  return (
    <div className="comment_card">
      <p>posted by: {author}</p>
      <p>date: {new Date(created_at).toLocaleString()}</p>
      <p>{body}</p>
      <p>votes: {votes}</p>
      {username === author ? (
        <button
          onClick={() => {
            handleDelete(comment_id);
          }}
        >
          delete comment
        </button>
      ) : null}
    </div>
  );
}
