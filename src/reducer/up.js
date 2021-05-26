const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    if(action.type === "INCREMENT" ){
        return state+1;
    }else{
      return state;
    }
}

export default changeTheNumber;