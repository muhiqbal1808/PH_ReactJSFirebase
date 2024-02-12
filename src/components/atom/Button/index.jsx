/* eslint-disable react/prop-types */
const Button = ({ onClick, title, loading, style }) => {
  return (
    <>
      {loading ? (
        <button className={`btn btn-disabled ${style}`}>
          <div className="flex items-center place-content-center gap-5">
            <span className="loading loading-spinner"></span>
            Loading ...
          </div>
        </button>
      ) : (
        <button className={`btn ${style}`} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
