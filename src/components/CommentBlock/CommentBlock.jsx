import CommentInfoStripe from "../CommentInfoStripe/CommentInfoStripe";
import UpDownVoteBlock from "../UpDownVoteBlock/UpDownVoteBlock";

export default function CommentBlock({ comment, userInformations, createdAt, score }) {
  return (
    <article className="comment-block">
      <UpDownVoteBlock score={score} />
      <div className="comment-block__text-container">
        <CommentInfoStripe
          userInformations={userInformations}
          createdAt={createdAt}
        />
        <p className="comment-block__comment-text">{comment}</p>
      </div>
    </article>
  );
}
