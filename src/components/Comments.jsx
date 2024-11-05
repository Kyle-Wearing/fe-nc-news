import { CommentList } from "./CommentList";
import { NewComment } from "./NewComment";

export function Comments() {
  return (
    <>
      <h1>Comments</h1>
      <NewComment />
      <CommentList />
    </>
  );
}
