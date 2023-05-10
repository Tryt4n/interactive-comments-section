import { useState, useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";

import InteractionButton from "../InteractionButton/InteractionButton";
import DeleteModal from "../DeleteModal/DeleteModal";

import { formatDistanceToNow } from "date-fns";

export default function CommentInfoStripe({
  userInformations,
  createdAt,
  handleDeleteComment,
  commentId,
  isReplyBoxShown,
  setIsReplyBoxShown,
  setSelectedCommentId,
  isEditing,
  setIsEditing,
  isDeleting,
  setIsDeleting,
}) {
  const { userData, isCurrentUser, searchForObject } = useContext(DataContext);

  const clickedComment = searchForObject(userData, commentId);

  const [formattedDate, setFormattedDate] = useState(
    formatDistanceToNow(new Date(createdAt), { addSuffix: true })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(formatDistanceToNow(new Date(createdAt), { addSuffix: true }));
    }, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);)
  
  return (
    <aside className="comment-info-stripe" aria-label="information bar">
      <div className="comment-info-stripe__informations-container">
        <img
          src={userInformations.image.png}
          alt={`${userInformations.username} avatar`}
          className="comment-info-stripe__image"
        />
        <h2 className="comment-info-stripe__nick">
          <a
            href="#"
            title={`Go to ${userInformations.username} profile`}
          >
            {userInformations.username}
          </a>
        </h2>
        {isCurrentUser === userInformations.username && (
          <mark className="comment-info-stripe__you-badge">you</mark>
        )}
        {clickedComment?.edited && (
          <span className="comment-info-stripe__edited-badge">Edited</span>
        )}
        <time
          dateTime={new Date(createdAt).toISOString()}
          title={createdAt}
          className="comment-info-stripe__time-ago"
        >
          {formattedDate}
        </time>
      </div>
      <div className="comment-info-stripe__btn-container">
        {isCurrentUser === userInformations.username ? (
          <>
            <InteractionButton
              isDelete
              setIsDeleting={setIsDeleting}
            />
            <InteractionButton
              isEdit
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          </>
        ) : (
          <InteractionButton
            commentId={commentId}
            isReplyBoxShown={isReplyBoxShown}
            setIsReplyBoxShown={setIsReplyBoxShown}
            setSelectedCommentId={setSelectedCommentId}
          />
        )}
      </div>
      {isDeleting && (
        <DeleteModal
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
          handleDeleteComment={handleDeleteComment}
        />
      )}
    </aside>
  );
}
