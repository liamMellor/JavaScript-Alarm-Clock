'use strict';

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
