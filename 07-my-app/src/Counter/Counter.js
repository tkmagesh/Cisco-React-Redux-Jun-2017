import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
	render(){
		let {value, increment, decrement } = this.props;
		return(
			<div>
				<input type="button" value="Decrement" onClick={decrement}/>
				<div> {value} </div>
				<input type="button" value="Increment" onClick={increment}/>
			</div>
		)
	}
}

function mapCounterStateToProps(state){
	return {
		value : state
	}
}

function mapCounterDispatchToProps(dispatch){

	var incrementAction = { type : 'INCREMENT'};
	var decrementAction = { type : 'DECREMENT'};
	function increment(){
		dispatch(incrementAction);
	}

	function decrement(){
		dispatch(decrementAction)
	}
	return{
		increment : increment,
		decrement : decrement
	}
}


export default connect(mapCounterStateToProps, mapCounterDispatchToProps)(Counter);