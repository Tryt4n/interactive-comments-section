import { useContext, useState, useRef } from "react";
import DataContext from "../../context/DataContext";

import TextareaAutosize from "react-textarea-autosize";

import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function AddCommentBlock({
  currentUser,
  btnText,
  commentId,
  isReplyBoxShown,
  setIsReplyBoxShown,
}) {
  const { userData, setUserData, searchForObject } = useContext(DataContext);
  const commentBlockRef = useRef(null);
  const [newComment, setNewComment] = useState("");

  function handleCommentChange(e) {
    setNewComment(e.target.value);
  }

  const parentComment = searchForObject(userData, commentId);

  const date = new Date();

  function addNewComment() {
    const newCommentObj = {
      id: crypto.randomUUID(),
      content: newComment,
      createdAt: date,
      score: 0,
      index: userData.comments.length,
      user: {
        image: currentUser.image,
        username: currentUser.username,
      },
      replies: [],
    };
    const updatedUserData = {
      ...userData,
      comments: [...userData.comments, newCommentObj],
    };
    if (newComment !== "") {
      setUserData(updatedUserData);
      setNewComment("");
    }
  }

  function addNewReply() {
    if (parentComment !== null) {
      const newReplyObj = {
        id: crypto.randomUUID(),
        content: newComment,
        createdAt: date,
        score: 0,
        parentIndex: parentComment.index,
        index: parentComment.replies.length,
        replyingTo: parentComment.user.username,
        user: {
          image: currentUser.image,
          username: currentUser.username,
        },
      };
      const updatedReplies = [...parentComment.replies, newReplyObj];
      const updatedComment = { ...parentComment, replies: updatedReplies };
      const updatedComments = userData.comments.map((comment) =>
        comment.id === commentId ? updatedComment : comment
      );
      const updatedUserData = { ...userData, comments: updatedComments };
      if (newComment !== "") {
        setUserData(updatedUserData);
        setNewComment("");
        commentBlockRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <article
      className={`add-comment-block ${btnText !== "send" ? "comment-active" : ""}`}
      ref={commentBlockRef}
    >
      <h2 className="visually-hidden">Add new Comment</h2>
      <img
        src={currentUser.image.png}
        alt="My Avatar"
        className="add-comment-block__image"
      />
      <TextareaAutosize
        placeholder="Add a comment..."
        aria-label="Add a comment"
        className="add-comment-block__textarea"
        minRows={3}
        autoFocus
        value={newComment}
        onChange={handleCommentChange}
      />
      <InteractionButtonsBig
        btnText={btnText}
        setUserData={setUserData}
        commentText={newComment}
        addNewComment={parentComment == null ? addNewComment : addNewReply}
        isReplyBoxShown={isReplyBoxShown}
        setIsReplyBoxShown={setIsReplyBoxShown}
      />
    </article>
  );
}
