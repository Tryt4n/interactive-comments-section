import { useContext } from "react";
import DataContext from "../../context/DataContext";

import CommentInfoStripe from "../CommentInfoStripe/CommentInfoStripe";
import UpDownVoteBlock from "../UpDownVoteBlock/UpDownVoteBlock";

export default function CommentBlock({
  commentId,
  comment,
  userInformations,
  createdAt,
  score,
  isReply,
}) {
  const { userData, setUserData } = useContext(DataContext);

  const handleDeleteComment = () => {
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
  };

  return (
    <article className="comment-block">
      <UpDownVoteBlock score={score} />
      <div className="comment-block__text-container">
        <CommentInfoStripe
          userInformations={userInformations}
          createdAt={createdAt}
          handleDeleteComment={handleDeleteComment}
          isReply={isReply}
        />
        <p className="comment-block__comment-text">{comment}</p>
      </div>
    </article>
  );
}
