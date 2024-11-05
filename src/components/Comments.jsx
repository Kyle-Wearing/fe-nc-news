import { useParams } from "react-router-dom";
import { CommentList } from "./CommentList";
import { NewComment } from "./NewComment";
import { useState } from "react";

export function Comments({ username }) {
  const [comments, setComments] = useState([]);

  return (
    <>
      <h1>Comments</h1>
      <NewComment username={username} setComments={setComments} />
      <CommentList
        username={username}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}
