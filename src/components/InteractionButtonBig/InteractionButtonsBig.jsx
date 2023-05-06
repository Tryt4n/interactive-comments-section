export default function InteractionButtonsBig({
  btnText,
  addNewComment,
  isReplyBoxShown,
  setIsReplyBoxShown,
  updateComment,
}) {
  function addComment() {
    addNewComment();
    if (isReplyBoxShown !== undefined) {
      setIsReplyBoxShown(!isReplyBoxShown);
    }
  }

  return (
    <>
      {btnText !== "update" && (
        <button
          className="interaction-button-big"
          onClick={addComment}
        >
          {btnText}
        </button>
      )}

      {btnText === "update" && (
        <button
          className="interaction-button-big"
          onClick={updateComment}
        >
          {btnText}
        </button>
      )}
    </>
  );
}
