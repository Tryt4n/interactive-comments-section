export default function InteractionButton({ isEdit, isDelete, handleDeleteComment }) {
  return (
    <button
      className="interaction-button"
      onClick={handleDeleteComment}
    >
      {!isEdit && !isDelete && (
        <>
          <img
            src="/icons/icon-reply.svg"
            alt="Reply Icon"
            aria-hidden
          />
          <span>Reply</span>
        </>
      )}
      {isEdit && (
        <>
          <img
            src="/icons/icon-edit.svg"
            alt="Edit Icon"
            aria-hidden
          />
          <span>Edit</span>
        </>
      )}
      {isDelete && (
        <>
          <img
            src="/icons/icon-delete.svg"
            alt="Delete Icon"
            aria-hidden
          />
          <span className="interaction-button--delete">Delete</span>
        </>
      )}
    </button>
  );
}
