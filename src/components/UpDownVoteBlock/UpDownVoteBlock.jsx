export default function UpDownVoteBlock({ score, handleVote }) {
  const voteUpLabelID = crypto.randomUUID();
  const voteDownLabelID = crypto.randomUUID();
  return (
    <div
      className="up-down-vote-block"
      role="group"
    >
      <button
        className="up-down-vote-block__btn"
        type="button"
        aria-controls="votes-output"
        aria-label="Up Vote"
        aria-labelledby={voteUpLabelID}
        aria-describedby="votes-output"
        onClick={handleVote}
      >
        +
      </button>
      <span
        id="votes-output"
        className="up-down-vote-block__votes-text"
        aria-label="Votes"
      >
        {score}
      </span>
      <button
        className="up-down-vote-block__btn"
        type="button"
        aria-controls="votes-output"
        aria-label="Down Vote"
        aria-labelledby={voteDownLabelID}
        aria-describedby="votes-output"
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
