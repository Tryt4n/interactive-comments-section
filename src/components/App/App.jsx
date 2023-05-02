import AddCommentBlock from "../AddCommentBlock/AddCommentBlock";
import CommentSection from "../CommentSection/CommentSection";

export default function App() {
  return (
    <main className="container">
      <h1 className="visually-hidden">Comments</h1>
      <CommentSection />
      <CommentSection />
      <AddCommentBlock />
    </main>
  );
}
