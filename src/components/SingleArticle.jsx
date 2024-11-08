import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { VoteButtons } from "./VoteButtons";
import Button from "@mui/material/Button";
import { PageArrow } from "./arrow";

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
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
        if (!userVote) {
          localStorage.setItem(`voted_${article_id}`, 0);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/error", { state: { err: "article" } });
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { title, author, body, article_img_url, created_at } = article;

  return (
    <div>
      <Button
        variant="contained"
        className="back_button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <PageArrow className="prev_button" />
        back
      </Button>

      <div className="single_article_page">
        <div>
          <img src={article_img_url} className="single_article_img" />
        </div>
        <div className="single_article_content">
          <h1>{title}</h1>
          <h2>posted by: {author}</h2>
          <h2>{new Date(created_at).toLocaleString()}</h2>
        </div>
        <div>
          <h5 className="single_article_body">{body}</h5>
          <p className="single_article_votes">votes: {votes}</p>
        </div>
        <VoteButtons
          id={article_id}
          userVote={userVote}
          setUserVote={setUserVote}
          setVotes={setVotes}
        />
      </div>
      <Comments />
    </div>
  );
}
