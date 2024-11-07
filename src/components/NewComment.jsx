import { useContext, useState } from "react";
import { postCommentByArticleId } from "../../api";
import { useParams } from "react-router-dom";
import { UsernameContext } from "./UsernameContext";

export function NewComment({ setComments }) {
  const { username } = useContext(UsernameContext);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (input && username) {
      setIsLoading(true);
      return postCommentByArticleId(article_id, username, input).then(
        (resposne) => {
          setComments((currComments) => {
            const newComments = [resposne, ...currComments];
            return newComments;
          });
          setIsLoading(false);
          setInput("");
          setIsError(false);
        }
      );
    } else {
      setIsError(true);
    }
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
      {isError && !input && username ? <p>cant post empty comment</p> : null}
      {isError && !username ? <p>must be logged in to comment</p> : null}
    </>
  );
}
