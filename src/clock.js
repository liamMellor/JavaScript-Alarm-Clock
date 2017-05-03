'use strict';

import { convert24Hourto12Hour, getAMorPM } from './utility';

class Clock {

	constructor(date) {
		this.date = new Date();
	}

	setDate(date) {
		this.date = date;
	}

	getHours() {
		return convert24Hourto12Hour(this.date.getHours());
	}

	getMinutes() {
		return this.date.getMinutes();
	}

	getSeconds() {
		return this.date.getSeconds();
	}

	getPeriod() {
		return getAMorPM(this.date.getHours());
	}

}

export default Clock;
