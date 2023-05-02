import CommentInfoStripe from "../CommentInfoStripe/CommentInfoStripe";
import UpDownVoteBlock from "../UpDownVoteBlock/UpDownVoteBlock";

export default function CommentBlock() {
  return (
    <article className="comment-block">
      <UpDownVoteBlock />
      <div className="comment-block__text-container">
        <CommentInfoStripe isYou />
        <p className="comment-block__comment-text">
          Impressive! Though it seems the drag feature could be improved. But overall it looks
          incredible. You've nailed the design and the responsiveness at various breakpoints works
          really well.
        </p>
      </div>
    </article>
  );
}
