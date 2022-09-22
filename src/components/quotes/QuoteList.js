import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import orderBy from "lodash/orderBy";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = ({ quotes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortedAscending = queryParams.get("sort") === "asc";

  const sortedParam = isSortedAscending ? "asc" : "desc";
  const sortedQuotes = orderBy(quotes, ["created_at"], [sortedParam]);

  const changeSortingHandler = () => {
    navigate(`${location.pathname}?sort=${isSortedAscending ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortedAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(({ id, text, author }) => (
          <QuoteItem key={id} id={id} author={author} text={text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
