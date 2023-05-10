export default function UpDownVoteBlock({ score, handleVote }) {
  const btnID = crypto.randomUUID();
  const votesOutputID = crypto.randomUUID();
  const voteupLabelId = crypto.randomUUID();
  const votedownLabelId = crypto.randomUUID();

  return (
    <div
      className="up-down-vote-block"
      role="group"
    >
      <button
        id={`upVoteBtn${btnID}`}
        className="upVoteBtn up-down-vote-block__btn"
        type="button"
        aria-controls={votesOutputID}
        aria-label="Up Vote"
        aria-labelledby={voteupLabelId}
        aria-describedby={votesOutputID}
        onClick={handleVote}
      >
        +
      </button>
      <span
        id={votesOutputID}
        className="up-down-vote-block__votes-text"
        aria-label="Votes"
      >
        {score}
      </span>
      <button
        id={`downVoteBtn${btnID}`}
        className="downVoteBtn up-down-vote-block__btn"
        type="button"
        aria-controls={votesOutputID}
        aria-label="Down Vote"
        aria-labelledby={votedownLabelId}
        aria-describedby={votesOutputID}
        onClick={handleVote}
      >
        -
      </button>

      <span
        id={voteupLabelId}
        className="visually-hidden"
      >
        Button to increase the number of votes
      </span>
      <span
        id={votedownLabelId}
        className="visually-hidden"
      >
        Button to decrease the number of votes
      </span>
    </div>
  );
}
