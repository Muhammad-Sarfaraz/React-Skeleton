const LoadingReducer=(state, action) =>{
    if (action.type === 'LOADED') {
        return {
            ...state,
            loading:'TRUE' ,
          };
    }

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default LoadingReducer;