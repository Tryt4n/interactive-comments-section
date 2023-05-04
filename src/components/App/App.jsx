import { useContext } from "react";
import DataContext from "../../context/DataContext";

import AddCommentBlock from "../AddCommentBlock/AddCommentBlock";
import CommentSection from "../CommentSection/CommentSection";

export default function App() {
  const { userData } = useContext(DataContext);

  return (
    <main className="container">
      <h1 className="visually-hidden">Comments</h1>

      {userData.comments.map((comment) => (
        <CommentSection
          key={comment.id}
          commentData={comment}
        />
      ))}
      <AddCommentBlock
        btnText="send"
        currentUser={userData.currentUser}
      />
    </main>
  );
}
