import { useState } from "react";
import { patchArticleById } from "../../api";

export function VoteButtons({ userVote, id, setVotes, setUserVote }) {
  const [voteLoading, setVoteLoading] = useState(false);
  function handleVote(num) {
    const vote = userVote < 1 && userVote > -1 ? num : num * 2;

    setVoteLoading(true);

    patchArticleById(id, vote).then(() => {
      setVotes((currVotes) => {
        return currVotes + vote;
      });
      setUserVote(num);
      setVoteLoading(false);
    });
  }

  return (
    <>
      {!voteLoading ? (
        <div className="article_votes_container">
          {userVote !== -1 ? (
            <button
              className="unclicked_like_button"
              disabled={userVote === -1}
              onClick={() => handleVote(-1)}
            >
              ⬇
            </button>
          ) : (
            <button
              className="clicked_like_button"
              disabled={userVote === 0}
              onClick={() => handleVote(0.5)}
            >
              ⬇
            </button>
          )}
          {userVote !== 1 ? (
            <button
              className="unclicked_like_button"
              disabled={userVote === 1}
              onClick={() => handleVote(1)}
            >
              ⬆
            </button>
          ) : (
            <button
              className="clicked_like_button"
              disabled={userVote === 0}
              onClick={() => handleVote(-0.5)}
            >
              ⬆
            </button>
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
