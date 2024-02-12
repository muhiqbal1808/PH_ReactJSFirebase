/* eslint-disable react/prop-types */
const Input = ({ style, loading, ...rest }) => {
  return (
    <>
      {loading ? (
        <input className={`input ${style}`} {...rest} disabled />
      ) : (
        <input className={`input ${style}`} {...rest} />
      )}
    </>
  );
};

export default Input;
