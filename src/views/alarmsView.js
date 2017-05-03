'use strict';

import { convertToDoubleDigit } from '../utility';

class AlarmsView {

	/*
	*	@param alarmsContainer (HTML Element)
	*/
	constructor(alarmsContainer, errorContainer) {
		this.alarms = alarmsContainer;
		this.error  = errorContainer
	}

	/*
	*	@param Alarm (object Alarm)
	*/
	addAlarm(Alarm) {
		const alarmElementClass = 'alarms__alarm';
		const alarmContent      = `${convertToDoubleDigit(Alarm.hours)} : ${convertToDoubleDigit(Alarm.minutes)} : ${Alarm.period.toUpperCase()}`;
		const newAlarmElement   = document.createElement('div');
		newAlarmElement.classList.add(alarmElementClass);
		newAlarmElement.innerHTML = alarmContent;
		this.alarms.appendChild(newAlarmElement);
	}

	showError() {
		const activeErrorClass = 'alarms__error--active';
		this.error.classList.add(activeErrorClass);
		setTimeout(() => {
			this.error.classList.remove(activeErrorClass);
		}, 5000)
	}

}

export default AlarmsView;
