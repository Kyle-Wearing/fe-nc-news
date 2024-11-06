import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { VoteButtons } from "./VoteButtons";

export function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(
    Number(localStorage.getItem(`vote_${article_id}`))
  );

  useEffect(() => {
    localStorage.setItem(`vote_${article_id}`, userVote);
  }, [userVote]);

  const navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
      setVotes(response.votes);
      if (!userVote) {
        localStorage.setItem(`voted_${article_id}`, 0);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { title, author, body, article_img_url, created_at } = article;

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
      <h1>{title}</h1>
      <h2>posted by: {author}</h2>
      <h3>{new Date(created_at).toLocaleString()}</h3>
      <img className="singl_article_img" src={article_img_url} />
      <h4 className="article_text">{body}</h4>
      <h5>votes: {votes}</h5>
      <VoteButtons
        id={article_id}
        userVote={userVote}
        setUserVote={setUserVote}
        setVotes={setVotes}
      />
      <Comments />
    </div>
  );
}
