import { createContext, useState,useReducer } from "react";
import LoadingReducer from  '../reducers/LoadingReducer'

const initialValue = true;

const initialState = [];

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(initialValue);

    const [state,dispatch]=useReducer(LoadingReducer,initialState);

    const isLoaded=()=>{
        console.log('isLoaded');
        dispatch({type:'LOADED'});
    }

    return (
        <LoadingContext.Provider value={{...state,isLoaded}}>
            {props.children}
        </LoadingContext.Provider>
    );
}