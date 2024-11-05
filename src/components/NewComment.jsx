import { useState } from "react";
import { postCommentByArticleId } from "../../api";
import { useParams } from "react-router-dom";

export function NewComment({ username, setComments }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { article_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    return postCommentByArticleId(article_id, username, input).then(
      (resposne) => {
        setComments((currComments) => {
          const newComments = [resposne, ...currComments];
          return newComments;
        });
        setIsLoading(false);
        setInput("");
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          post comment
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        {!isLoading ? (
          <button type="sunbmit">post comment</button>
        ) : (
          <p>Sending comment...</p>
        )}
      </form>
    </>
  );
}
