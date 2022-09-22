import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = ({ onAddQuote, isLoading }) => {
  // const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    onAddQuote({
      author: enteredAuthor,
      text: enteredText,
      created_at: new Date().toISOString(),
    });
  }

  const focusFormHandler = () => {
    // setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    // setIsEntering(false);
  };

  return (
    <>
      <Card>
        <form
          className={classes.form}
          onFocus={focusFormHandler}
          onSubmit={submitFormHandler}
        >
          <LoadingSpinner isLoading={isLoading} className={classes.loading} />
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
