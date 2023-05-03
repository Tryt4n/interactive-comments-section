import CommentBlock from "../CommentBlock/CommentBlock";

export default function CommentSection({ commentData }) {
  console.log(commentData);

  return (
    <>
      <CommentBlock
        key={commentData.id}
        comment={commentData.content}
        userInformations={commentData.user}
        createdAt={commentData.createdAt}
        score={commentData.score}
      />

      {commentData.replies.length !== 0 && (
        <div className="comment-section__subcomment">
          {commentData.replies.map((replie) => (
            <CommentBlock
              key={replie.id}
              comment={replie.content}
              userInformations={replie.user}
              createdAt={replie.createdAt}
              score={replie.score}
            />
          ))}
        </div>
      )}
    </>
  );
}
