export default function UpDownVoteBlock({ score, handleVote }) {
  return (
    <div
      className="up-down-vote-block"
      role="group"
    >
      <button
        id="upVoteBtn"
        className="up-down-vote-block__btn"
        type="button"
        aria-controls="votes-output"
        aria-label="Up Vote"
        aria-labelledby="voteup-label"
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
        id="downVoteBtn"
        className="up-down-vote-block__btn"
        type="button"
        aria-controls="votes-output"
        aria-label="Down Vote"
        aria-labelledby="votedown-label"
        aria-describedby="votes-output"
        onClick={handleVote}
      >
        -
      </button>

      <span
        id="voteup-label"
        className="visually-hidden"
      >
        Button to increase the number of votes
      </span>
      <span
        id="votedown-label"
        className="visually-hidden"
      >
        Button to decrease the number of votes
      </span>
    </div>
  );
}
