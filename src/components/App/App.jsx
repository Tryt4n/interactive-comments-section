import { useContext } from "react";
import DataContext from "../../context/DataContext";
import AddCommentBlock from "../AddCommentBlock/AddCommentBlock";
import CommentSection from "../CommentSection/CommentSection";

export default function App() {
  const userData = useContext(DataContext);
  console.log(userData);

  return (
    <main className="container">
      <h1 className="visually-hidden">Comments</h1>
      <CommentSection />
      <CommentSection />
      <AddCommentBlock />
    </main>
  );
}
