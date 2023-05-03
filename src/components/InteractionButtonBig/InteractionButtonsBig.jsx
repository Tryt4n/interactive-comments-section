export default function InteractionButtonsBig({ btnText, addNewComment }) {
  function addComment() {
    addNewComment();
  }

  return (
    <button
      className="interaction-button-big"
      onClick={addComment}
    >
      {btnText}
    </button>
  );
}
