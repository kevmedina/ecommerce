export const addProduct = (id) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT", id });
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT", id });
};
