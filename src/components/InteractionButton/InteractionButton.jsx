export default function InteractionButton({
  isEdit,
  isDelete,
  handleDeleteComment,
  commentId,
  isReplyBoxShown,
  setIsReplyBoxShown,
  setSelectedCommentId,
  isEditing,
  setIsEditing,
}) {
  return (
    <>
      {!isEdit && !isDelete && (
        <button
          className="interaction-button"
          onClick={() => {
            setSelectedCommentId(commentId);
            setIsReplyBoxShown(!isReplyBoxShown);
          }}
        >
          <img
            src="/icons/icon-reply.svg"
            alt="Reply Icon"
            aria-hidden
          />
          <span>Reply</span>
        </button>
      )}
      {isEdit && (
        <button
          className="interaction-button"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <img
            src="/icons/icon-edit.svg"
            alt="Edit Icon"
            aria-hidden
          />
          <span>Edit</span>
        </button>
      )}
      {isDelete && (
        <button
          className="interaction-button"
          onClick={handleDeleteComment}
        >
          <img
            src="/icons/icon-delete.svg"
            alt="Delete Icon"
            aria-hidden
          />
          <span className="interaction-button--delete">Delete</span>
        </button>
      )}
    </>
  );
}
