import classes from './comment-list.module.css';

function CommentList({ commentList = [], isLoading }) {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={classes.comments}>
        {commentList.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentList;
