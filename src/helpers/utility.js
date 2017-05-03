'use strict';

/*
* Helper functions for working with hours and minutes passed from Date object
* Also used to verify user inputs.
*/
const convert24Hourto12Hour = (hours) => {
	if (hours === 0) {
		return 12;
	}
	else if (hours > 12) {
		return hours - 12;
	}
	return hours;
}

const getAMorPM = (hours) => {
	return hours < 12 ? 'AM' : 'PM';
}

const convertToDoubleDigit = (number) => {
	return parseInt(number,10) < 10 ? '0' + number : number;
}

const hoursAreValid = (hours) => {
	return !Number.isNaN(hours) && typeof hours === 'number' & hours > 0 && hours <= 12;
}

const minutesAreValid = (mins) => {
	return !Number.isNaN(mins) && typeof mins === 'number' & mins >= 0 && mins <= 59;
}

export {
	convert24Hourto12Hour,
	getAMorPM,
	convertToDoubleDigit,
	hoursAreValid,
	minutesAreValid
};
