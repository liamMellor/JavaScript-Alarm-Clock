'use strict';

/*
* Calls initialize once per second and passes the new Date to the callback which is
* the appUpdater function in the Controller
*/
class Timer {

	constructor(callback) {
		this.callback = callback;
	}

	initialize() {
		setTimeout(() => {
			this.callback(new Date());
			this.initialize();
		}, 1000)
	}

}

export default Timer;
