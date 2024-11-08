import { useState } from "react";
import { patchArticleById } from "../../api";
import { BxUpArrow } from "./arrow";

export function VoteButtons({ userVote, id, setVotes, setUserVote }) {
  const [voteLoading, setVoteLoading] = useState(false);

  function handleVote(num) {
    setVoteLoading(true);
    let vote = 0;
    if (!userVote) {
      vote = num;
    } else if (userVote === num) {
      vote = num * -1;
    } else {
      vote = num * 2;
    }

    setVotes((currVotes) => {
      return currVotes + vote;
    });

    patchArticleById(id, vote)
      .then(() => {
        if (!userVote) {
          setUserVote(vote);
        } else if (userVote === num) {
          setUserVote(0);
        } else {
          setUserVote(num);
        }
        setVoteLoading(false);
      })
      .catch(() => {
        setVotes((currVotes) => {
          return currVotes - vote;
        });
        setVoteLoading(false);
      });
  }

  return (
    <>
      <div className={`vote_button_container`}>
        <button
          disabled={voteLoading}
          className="vote_button"
          onClick={() => handleVote(-1)}
        >
          <BxUpArrow
            className={userVote !== -1 ? "downvote_button" : "clicked_downvote"}
          />
        </button>
        vote
        <button
          disabled={voteLoading}
          className="vote_button"
          onClick={() => handleVote(1)}
        >
          <BxUpArrow
            className={userVote !== 1 ? "upvote_button" : "clicked_upvote"}
          />
        </button>
      </div>
    </>
  );
}
