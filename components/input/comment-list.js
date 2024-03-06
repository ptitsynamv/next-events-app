import classes from './comment-list.module.css';

function CommentList({ commentList }) {
  return (
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
  );
}

export default CommentList;
