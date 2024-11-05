import { deleteCommentById } from "../../api";

export function CommentCard(props) {
  const { author, body, created_at, votes, comment_id } = props.comment;
  const { username } = props;

  function handleDelete(id) {}

  return (
    <div className="comment_card">
      <p>posted by: {author}</p>
      <p>date: {created_at}</p>
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
