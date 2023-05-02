import CommentBlock from "../CommentBlock/CommentBlock";

export default function CommentSection() {
  return (
    <>
      <CommentBlock />
      <div className="comment-section__subcomment">
        <CommentBlock />
        <CommentBlock />
      </div>
    </>
  );
}
