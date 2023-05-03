import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

import AddCommentBlock from "../AddCommentBlock/AddCommentBlock";
import CommentSection from "../CommentSection/CommentSection";

export default function App() {
  const { data } = useContext(DataContext);
  const [userData, setUserData] = useState(data);
  console.log(userData);

  return (
    <main className="container">
      <h1 className="visually-hidden">Comments</h1>
      {userData.comments.map((comment) => (
        <CommentSection
          key={comment.id}
          commentData={comment}
        />
      ))}
      <AddCommentBlock currentUser={userData.currentUser} />
    </main>
  );
}
