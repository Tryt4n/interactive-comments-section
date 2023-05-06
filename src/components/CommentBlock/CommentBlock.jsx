import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

import TextareaAutosize from "react-textarea-autosize";

import CommentInfoStripe from "../CommentInfoStripe/CommentInfoStripe";
import UpDownVoteBlock from "../UpDownVoteBlock/UpDownVoteBlock";
import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function CommentBlock({
  commentId,
  comment,
  userInformations,
  createdAt,
  score,
  isReply,
  replyingTo,
  isReplyBoxShown,
  setIsReplyBoxShown,
  setSelectedCommentId,
}) {
  const { userData, setUserData, searchForObject, isCurrentUser } = useContext(DataContext);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [votedType, setVotedType] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [myComment, setMyComment] = useState(comment);
  const [editingCommentText, setEditingCommentText] = useState(comment);
  const [warningInfoVote, setWarningInfoVote] = useState(false);

  function addVote(commentIndex, replyParent, clickedComment, newComments, addedValue) {
    commentIndex !== -1
      ? (newComments[commentIndex].score += addedValue)
      : (newComments[replyParent.index].replies[clickedComment.index].score += addedValue);
  }

  function subtractVote(commentIndex, replyParent, clickedComment, newComments, subtractedValue) {
    commentIndex !== -1
      ? (newComments[commentIndex].score -= subtractedValue)
      : (newComments[replyParent.index].replies[clickedComment.index].score -= subtractedValue);
  }

  function handleVote(e) {
    if (userInformations.username === isCurrentUser) return setWarningInfoVote(true);

    const commentIndex = userData.comments.findIndex((comment) => comment.id === commentId);
    const clickedComment = searchForObject(userData, commentId);
    const replyParent =
      clickedComment.parentIndex !== undefined
        ? userData.comments[clickedComment.parentIndex]
        : null;

    const newComments = [...userData.comments];
    if (!alreadyVoted) {
      if (e.target.id === "upVoteBtn") {
        addVote(commentIndex, replyParent, clickedComment, newComments, 1);
        setVotedType("upVote");
      }
      if (e.target.id === "downVoteBtn") {
        subtractVote(commentIndex, replyParent, clickedComment, newComments, 1);
        setVotedType("downVote");
      }
      setAlreadyVoted(true);
    } else if (alreadyVoted) {
      if (votedType === "upVote" && e.target.id === "downVoteBtn") {
        subtractVote(commentIndex, replyParent, clickedComment, newComments, 2);
        setVotedType("downVote");
      }
      if (votedType === "downVote" && e.target.id === "upVoteBtn") {
        addVote(commentIndex, replyParent, clickedComment, newComments, 2);
        setVotedType("upVote");
      }
    }

    setUserData((prevState) => ({
      ...prevState,
      comments: newComments,
    }));
  }

  function handleEdit(e) {
    setEditingCommentText(e.target.value);
  }
  function updateComment() {
    if (editingCommentText !== "") {
      setMyComment(editingCommentText);
      setIsEditing(!isEditing);
    }
  }

  function handleDeleteComment() {
    if (isReply) {
      const newComments = userData.comments.map((comment) => {
        const newReplies = comment.replies.filter((reply) => reply.id !== commentId);
        return {
          ...comment,
          replies: newReplies,
        };
      });
      setUserData((prevState) => ({
        ...prevState,
        comments: newComments,
      }));
    } else {
      const newComments = userData.comments.filter((comment) => comment.id !== commentId);
      setUserData((prevState) => ({
        ...prevState,
        comments: newComments,
      }));
    }
  }

  if (warningInfoVote) {
    setTimeout(() => {
      setWarningInfoVote(false);
    }, 2500);
  }

  return (
    <article className="comment-block">
      <UpDownVoteBlock
        score={score}
        commentId={commentId}
        handleVote={handleVote}
      />
      {warningInfoVote && (
        <dialog
          role="alert"
          aria-label="warning info"
          open={warningInfoVote}
          className="comment-block__warning-info"
        >
          You can&apos;t vote for yourself.
        </dialog>
      )}
      <div className="comment-block__text-container">
        <CommentInfoStripe
          userInformations={userInformations}
          createdAt={createdAt}
          handleDeleteComment={handleDeleteComment}
          commentId={commentId}
          isReplyBoxShown={isReplyBoxShown}
          setIsReplyBoxShown={setIsReplyBoxShown}
          setSelectedCommentId={setSelectedCommentId}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        {!isEditing ? (
          <p className="comment-block__comment-text">
            {replyingTo && (
              <>
                <a
                  href="#"
                  className="comment-block__replyingTo-text"
                  title={`Go to ${replyingTo} profile`}
                >
                  @{replyingTo}
                </a>
                &nbsp;
              </>
            )}
            <span>{myComment}</span>
          </p>
        ) : (
          <div className="comment-block__textarea-wrapper">
            <TextareaAutosize
              className="comment-block__textarea comment-block__textarea--update-comment"
              aria-label="Change Comment"
              minRows={3}
              value={editingCommentText}
              onChange={handleEdit}
              placeholder="Can't be blank"
            />
            <InteractionButtonsBig
              btnText="update"
              updateComment={updateComment}
              editingCommentText={editingCommentText}
            />
          </div>
        )}
      </div>
    </article>
  );
}
