import { useParams } from "react-router-dom";
import { CommentList } from "./CommentList";
import { NewComment } from "./NewComment";
import { useState } from "react";

export function Comments() {
  const { username } = useContext(UsernameContext);

  const [comments, setComments] = useState([]);

  return (
    <>
      <h1>Comments</h1>
      <NewComment setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
}
