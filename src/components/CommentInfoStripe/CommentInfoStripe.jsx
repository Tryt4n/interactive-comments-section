import InteractionButton from "../InteractionButton/InteractionButton";

export default function CommentInfoStripe({ isYou }) {
  return (
    <aside className="comment-info-stripe">
      <div className="comment-info-stripe__informations-container">
        <img
          src="/images/image-amyrobson.png"
          alt="Amy Robson avatar"
          className="comment-info-stripe__image"
        />
        <h2 className="comment-info-stripe__nick">
          <a
            href="#"
            title="Go to amyrobson profile"
          >
            amyrobson
          </a>
        </h2>
        {isYou && <mark className="comment-info-stripe__you-text">you</mark>}
        <time
          dateTime=""
          className="comment-info-stripe__time-ago"
        >
          1 month ago
        </time>
      </div>
      <div className="comment-info-stripe__btn-container">
        <InteractionButton isDelete />
        <InteractionButton />
      </div>
    </aside>
  );
}
