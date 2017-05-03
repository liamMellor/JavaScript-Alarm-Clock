'use strict';

import { convert24Hourto12Hour, getAMorPM } from './helpers/utility';

/*
* Stores the Date (Javascript Date object) and provides getters for it's properties
*/
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
