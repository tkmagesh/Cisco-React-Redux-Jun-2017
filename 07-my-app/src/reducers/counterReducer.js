function counterReducer(currentState = 0, action){
	switch(action.type){
        case 'INCREMENT':
			return ++currentState;
        case 'DECREMENT':
			return --currentState;
		default :
			return currentState;
    }
}

export default counterReducer;