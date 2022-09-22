import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = ({ quote }) => {
  const { text, author } = quote || {};
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
