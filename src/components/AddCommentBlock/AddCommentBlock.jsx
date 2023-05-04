import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function AddCommentBlock({ currentUser, btnText }) {
  const { userData, setUserData } = useContext(DataContext);
  const [newComment, setNewComment] = useState("");

  function handleCommentChange(e) {
    setNewComment(e.target.value);
  }

  function addNewComment() {
    const newCommentObj = {
      id: crypto.randomUUID(),
      content: newComment,
      createdAt: "1 second ago",
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
    setUserData(updatedUserData);
    setNewComment("");
  }

  return (
    <article className={`add-comment-block ${btnText !== "send" && "comment-active"}`}>
      <img
        src={currentUser.image.png}
        alt="My Avatar"
        className="add-comment-block__image"
      />
      <textarea
        name="add-comment"
        id="add-comment"
        placeholder="Add a comment..."
        aria-label="Add a comment"
        className="add-comment-block__text-area"
        value={newComment}
        onChange={handleCommentChange}
      ></textarea>
      <InteractionButtonsBig
        btnText={btnText}
        setUserData={setUserData}
        commentText={newComment}
        addNewComment={addNewComment}
      />
    </article>
  );
}
