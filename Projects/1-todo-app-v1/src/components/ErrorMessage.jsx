let ErrorMessage = ({ items }) => {
  return <>{items == 0 && <p className="error-message"> No Item found!</p>}</>;
};

export default ErrorMessage;
