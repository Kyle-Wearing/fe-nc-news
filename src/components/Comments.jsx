import { CommentList } from "./CommentList";
import { NewComment } from "./NewComment";

export function Comments({ username }) {
  return (
    <>
      <h1>Comments</h1>
      <NewComment username={username} />
      <CommentList username={username} />
    </>
  );
}
