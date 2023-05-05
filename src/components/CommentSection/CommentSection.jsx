import { useContext } from "react";
import DataContext from "../../context/DataContext";

import AddCommentBlock from "../AddCommentBlock/AddCommentBlock";
import CommentBlock from "../CommentBlock/CommentBlock";

export default function CommentSection({ commentData }) {
  const { userData } = useContext(DataContext);
  const commentId = commentData.id;
  const comment = commentData.content;
  const userInformations = commentData.user;
  const createdAt = commentData.createdAt;
  const score = commentData.score;
  const isReply = false;

  return (
    <section className="comment-section">
      <CommentBlock
        key={commentId}
        commentId={commentId}
        comment={comment}
        userInformations={userInformations}
        createdAt={createdAt}
        score={score}
        isReply={isReply}
      />
      <AddCommentBlock
        btnText="reply"
        commentId={commentId}
        currentUser={userData.currentUser}
      />

      {commentData.replies.length !== 0 && (
        <div className="comment-section__subcomment">
          {commentData.replies.map((replie) => (
            <CommentBlock
              key={replie.id}
              commentId={replie.id}
              comment={replie.content}
              userInformations={replie.user}
              createdAt={replie.createdAt}
              score={replie.score}
              isReply={!isReply}
              replyingTo={replie.replyingTo}
            />
          ))}
        </div>
      )}
    </section>
  );
}
