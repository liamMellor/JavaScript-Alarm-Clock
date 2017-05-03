'use strict';

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

export { convert24Hourto12Hour, getAMorPM, convertToDoubleDigit };
