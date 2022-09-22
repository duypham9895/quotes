import { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const navigate = useNavigate();
  const [isShowComments, setIsShowComments] = useState(false);
  const {
    sendRequest,
    data: quote,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  useEffect(() => {
    if (!isShowComments) {
      return navigate(`/quotes/${quoteId}`);
    }
  }, [isShowComments, quoteId, navigate]);

  const visibleCommentsHandler = () => {
    setIsShowComments((prevState) => !prevState);
  };

  if (status === "pending") {
    return <LoadingSpinner isLoading={true} />;
  }

  if (error) {
    <p className="centered focused">{error}</p>;
  }

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote quote={quote} />
      <div className="centered">
        <Link
          to="comments"
          className="btn--flat"
          onClick={visibleCommentsHandler}
        >
          {isShowComments ? "Hidden Comments" : "View Comments"}
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
