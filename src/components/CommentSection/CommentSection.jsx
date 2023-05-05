import React, { useContext, useState } from "react";
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

  const [isReplyBoxShown, setIsReplyBoxShown] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

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
        isReplyBoxShown={isReplyBoxShown}
        setIsReplyBoxShown={setIsReplyBoxShown}
        setSelectedCommentId={setSelectedCommentId}
      />
      {isReplyBoxShown && selectedCommentId === commentId && (
        <AddCommentBlock
          btnText="reply"
          commentId={commentId}
          currentUser={userData.currentUser}
          isReplyBoxShown={isReplyBoxShown}
          setIsReplyBoxShown={setIsReplyBoxShown}
        />
      )}

      {commentData.replies.length !== 0 && (
        <div className="comment-section__subcomment">
          {commentData.replies.map((replie) => (
            <React.Fragment key={replie.id}>
              <CommentBlock
                commentId={replie.id}
                comment={replie.content}
                userInformations={replie.user}
                createdAt={replie.createdAt}
                score={replie.score}
                isReply={!isReply}
                replyingTo={replie.replyingTo}
                isReplyBoxShown={isReplyBoxShown}
                setIsReplyBoxShown={setIsReplyBoxShown}
                setSelectedCommentId={setSelectedCommentId}
              />
              {isReplyBoxShown && selectedCommentId === replie.id && (
                <AddCommentBlock
                  btnText="reply"
                  commentId={commentId}
                  currentUser={userData.currentUser}
                  isReplyBoxShown={isReplyBoxShown}
                  setIsReplyBoxShown={setIsReplyBoxShown}
                  replie={replie}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
}
