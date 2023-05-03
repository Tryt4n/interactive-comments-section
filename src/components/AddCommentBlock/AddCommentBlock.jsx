import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function AddCommentBlock({ currentUser }) {
  return (
    <section className="add-comment-block">
      <img
        src={currentUser.image.png}
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
