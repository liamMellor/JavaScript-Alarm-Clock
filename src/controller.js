'use strict';

class Controller {

	constructor(app, clock, display) {
		this.alarmClock = app;
		this.clock      = clock;
		this.display    = display;
	}

	timerListener(date) {
		this.clock.setDate(date);
		this.alarmClock.setClock(this.clock);
		this.display.setTime(this.clock);
	}

}

export default Controller;
