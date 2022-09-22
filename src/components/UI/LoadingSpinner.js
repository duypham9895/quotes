import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ isLoading, className = "" }) => {
  if (!isLoading) {
    return;
  }
  return (
    <div className="centered">
      <div className={`${className} ${classes.spinner}`}></div>
    </div>
  );
};

export default LoadingSpinner;
