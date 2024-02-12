import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Bale MKS" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      console.log("Success", userCredential);
      dispatch({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};
