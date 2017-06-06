

function createStore(reducer){
	let _reducer = reducer;
	let _currentState = undefined;
	
	let init_action = { action : '__INIT_ACTION' };
	_currentState = reducer(_currentState, init_action);

	function getState(){
		return _currentState;
	}
	let _subscriptions = [];

	function subscribe(callback){
		_subscriptions.push(callback);
	}

	function triggerChange(){
		_subscriptions.forEach(subscription => subscription());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState !== _currentState){
			_currentState = newState;
			triggerChange();
		}
	}
	return {
		getState : getState,
		subscribe : subscribe,
		dispatch : dispatch
	}
}