export function CommentCard(props) {
  const { author, body, created_at, votes } = props.comment;
  return (
    <div className="comment_card">
      <p>posted by: {author}</p>
      <p>date: {created_at}</p>
      <p>{body}</p>
      <p>votes: {votes}</p>
    </div>
  );
}
