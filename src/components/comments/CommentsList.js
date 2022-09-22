import isEmpty from "lodash/isEmpty";
import LoadingSpinner from "../UI/LoadingSpinner";

import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = ({ comments = [], status, error }) => {
  const isLoading = status === "pending";
  const isEmptyComments = status === "completed" && isEmpty(comments);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    <p className="centered focused">{error}</p>;
  }

  if (isEmptyComments) {
    return <p className="centered">Not found comments yet!</p>;
  }

  return (
    <ul className={classes.comments}>
      {comments.map(({ id, text }) => (
        <CommentItem key={id} text={text} />
      ))}
    </ul>
  );
};

export default CommentsList;
