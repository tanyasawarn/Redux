import { createStore } from "redux";

const storeReducer = (state={counter:0},action) =>{

    if(action.type === 'increment'){
        return{
            counter:state.counter + 5
        }
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter - 5
        }
    }
    return state;
};


const store = createStore(storeReducer);

export default store;
