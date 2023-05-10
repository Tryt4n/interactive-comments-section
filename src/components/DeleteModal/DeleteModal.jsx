import { useEffect, useRef } from "react";

export default function DeleteModal({ isDeleting, handleDeleteComment, setIsDeleting }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isDeleting) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isDeleting]);

  function closeModalOnBackdropClick(e) {
    const dialogDimensions = e.target.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialogRef.current.close();
      setIsDeleting(false);
    }
  }

  return (
    <dialog
      className="delete-modal"
      title="Delete comment confirmation"
      ref={dialogRef}
      onClick={(e) => closeModalOnBackdropClick(e)}
    >
      <h2 className="delete-modal__header">Delete comment</h2>
      <p className="delete-modal__text">
        Are you sure you want to delete this comment? This will remove the comment and can&apos;t be
        undone.
      </p>
      <div className="delete-modal__btn-wrapper">
        <button
          className="delete-modal__btn delete-modal__btn--cancel"
          aria-label="Cancel comment deletion"
          onClick={() => {
            dialogRef.current.close();
            setIsDeleting(false);
          }}
        >
          no, cancel
        </button>
        <button
          className="delete-modal__btn delete-modal__btn--delete"
          aria-label="Delete comment"
          onClick={handleDeleteComment}
        >
          yes, delete
        </button>
      </div>
    </dialog>
  );
}
