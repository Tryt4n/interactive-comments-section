import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function AddCommentBlock() {
  return (
    <section className="add-comment-block">
      <img
        src="/images/image-juliusomo.png"
        alt="My Avatar"
        className="add-comment-block__image"
      />
      <textarea
        name="add-comment"
        id="add-comment"
        placeholder="Add a comment..."
        className="add-comment-block__text-area"
        aria-label="Add a comment"
      ></textarea>
      <InteractionButtonsBig btnText="send" />
    </section>
  );
}
