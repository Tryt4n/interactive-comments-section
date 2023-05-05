export default function InteractionButtonsBig({
  btnText,
  addNewComment,
  isReplyBoxShown,
  setIsReplyBoxShown,
}) {
  function addComment() {
    addNewComment();
    if (isReplyBoxShown !== undefined) {
      setIsReplyBoxShown(!isReplyBoxShown);
    }
  }

  return (
    <button
      className="interaction-button-big"
      onClick={btnText !== "update" ? addComment : console.log("It will be update")}
    >
      {btnText}
    </button>
  );
}
