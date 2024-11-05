import { useState } from "react";
import { postCommentByArticleId } from "../../api";
import { useParams } from "react-router-dom";

export function NewComment({ username }) {
  const [input, setInput] = useState("");

  const { article_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    return postCommentByArticleId(article_id, username, input).then(
      (resposne) => {
        console.log(resposne);
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
        <button type="sunbmit">post comment</button>
      </form>
    </>
  );
}
