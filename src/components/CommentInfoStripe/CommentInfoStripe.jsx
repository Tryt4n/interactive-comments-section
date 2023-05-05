import { useContext } from "react";
import DataContext from "../../context/DataContext";
import dateFormatter from "../../dateFormatter";

import InteractionButton from "../InteractionButton/InteractionButton";

export default function CommentInfoStripe({
  userInformations,
  createdAt,
  handleDeleteComment,
  commentId,
  isReplyBoxShown,
  setIsReplyBoxShown,
  setSelectedCommentId,
}) {
  const { isCurrentUser } = useContext(DataContext);

  const formattedDate = dateFormatter(createdAt);

  return (
    <aside className="comment-info-stripe">
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
          <mark className="comment-info-stripe__you-text">you</mark>
        )}
        <time
          dateTime={formattedDate.toLocaleString()}
          title={formattedDate.toLocaleString()}
          className="comment-info-stripe__time-ago"
        >
          {createdAt}
        </time>
      </div>
      <div className="comment-info-stripe__btn-container">
        {isCurrentUser === userInformations.username ? (
          <>
            <InteractionButton
              isDelete
              handleDeleteComment={handleDeleteComment}
            />
            <InteractionButton isEdit />
            {/* <InteractionButton
              commentId={commentId}
              isReplyBoxShown={isReplyBoxShown}
              setIsReplyBoxShown={setIsReplyBoxShown}
              setSelectedCommentId={setSelectedCommentId}
            /> */}
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
    </aside>
  );
}
