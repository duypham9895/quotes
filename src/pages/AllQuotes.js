import { useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    data: quotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);
  const isLoading = status === "pending";
  const isSuccess = status === "completed";

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    <p className="centered focused">{error}</p>;
  }

  if (isSuccess && isEmpty(quotes)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
