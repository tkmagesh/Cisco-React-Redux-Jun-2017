class EventEmitter{
	constructor(){
		this._subscribers = [];
	}
	subscribe(callback){
		this._subscribers.push(callback);
	}
	triggerChange(){
		this._subscribers.forEach(callback => callback());
	};
}