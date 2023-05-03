import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";

import InteractionButtonsBig from "../InteractionButtonBig/InteractionButtonsBig";

export default function AddCommentBlock({ currentUser }) {
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

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <section className="add-comment-block">
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
        btnText="send"
        setUserData={setUserData}
        commentText={newComment}
        addNewComment={addNewComment}
      />
    </section>
  );
}
