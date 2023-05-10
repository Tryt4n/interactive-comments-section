export default function UpDownVoteBlock({ score, handleVote }) {
  const voteUpLabelID = crypto.randomUUID();
  const voteDownLabelID = crypto.randomUUID();
  const votesOutputID = crypto.randomUUID();

  return (
    <div
      className="up-down-vote-block"
      role="group"
    >
      <button
        className="up-down-vote-block__btn"
        type="button"
        aria-controls={votesOutputID}
        aria-label="Up Vote"
        aria-labelledby={voteUpLabelID}
        aria-describedby={votesOutputID}
        onClick={handleVote}
      >
        +
      </button>
      <span
        id={votesOutputID}
        className="up-down-vote-block__votes-text"
      >
        {score}
      </span>
      <button
        className="up-down-vote-block__btn"
        type="button"
        aria-controls={votesOutputID}
        aria-label="Down Vote"
        aria-labelledby={voteDownLabelID}
        aria-describedby={votesOutputID}
        onClick={handleVote}
      >
        -
      </button>

      <span
        id={voteUpLabelID}
        className="visually-hidden"
      >
        Button to increase the number of votes
      </span>
      <span
        id={voteDownLabelID}
        className="visually-hidden"
      >
        Button to decrease the number of votes
      </span>
    </div>
  );
}
