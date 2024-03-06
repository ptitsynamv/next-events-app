import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [isCommentListLoading, setIsCommentListLoading] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setCommentList([]);
      setIsCommentListLoading(true);

      fetch(`/api/comment/${eventId}`)
        .then((req) => req.json())
        .then(({ comments }) => {
          setCommentList(comments);
          setIsCommentListLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: 'Sending comment...',
      message: 'Adding new comment',
      status: 'pending',
    });

    fetch(`/api/comment/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then(() => {
        showNotification({
          title: 'Comment',
          message: 'New comment was added',
          status: 'success',
        });
      })
      .catch((error) => {
        showNotification({
          title: 'Error',
          message: error.message,
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && (
        <CommentList
          commentList={commentList}
          isLoading={isCommentListLoading}
        />
      )}
    </section>
  );
}

export default Comments;
