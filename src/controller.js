'use strict';

import Alarm from './alarm';
import AlarmsView from './views/alarmsView';
import { hoursAreValid, minutesAreValid } from './helpers/utility';


/*
*	@param app (object AlarmClock) the application object
*	@param clock (object Clock) maintains the application Date()
*	@param display (object DisplayView) maintains and operates the time being displayed
*	@param controls (object ControlsView) operates the controls for setting an alarm
*	@param alarms (object alarmsView) displays a users alarm and errors
*/
class Controller {

	constructor(app, clock, display, controls, alarms) {
		this.alarmClock   = app;
		this.clock        = clock;
		this.displayView  = display;
		this.controlsView = controls;
		this.alarmsView   = alarms;
	}

	// Updtes the App's clock and Display once every second.
	// On the minute, checks if any alarms need to ring.
	appUpdater(date) {
		this.clock.setDate(date);
		this.alarmClock.setClock(this.clock);
		this.displayView.setTime(this.clock);
		if (this.clock.getSeconds() === 0) {
			this.alarmClock.checkIfAlarmShouldRing();
		}
	}

	// Set the controls view buttons active or not. Set the period in the alarmclock application.
	setApplicationPeriod(event) {
		this.controlsView.setActivePeriodButton(event.target);
		this.alarmClock.setPeriod(event.target.value);
	}

	// Sets a click listener on the active period button
	addPeriodButtonListeners(periodButtons) {
		periodButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				this.setApplicationPeriod(event);
			});
		});
	}

	// Update the control inputs as success or not when user inputs there alarm time.
	setHourandMinuteInputStates(hourInput, minuteInput, hours, mins) {
		this.controlsView.setInputClass(hoursAreValid(hours), hourInput);
		this.controlsView.setInputClass(minutesAreValid(mins), minuteInput);
	}

	// Create an alarm and (if valid) update the view and application with it.
	tryCreateAndSetAlarm(hours, mins, period) {
		const newAlarm = new Alarm(hours, mins, period);
		if (newAlarm.valid()) {
			this.alarmClock.addAlarm(newAlarm);
			this.alarmsView.addAlarm(newAlarm);
		}
		else {
			this.alarmsView.showError();
		}
	}

	// Listen to controls submit button.
	addControlsFormListener(controlsForm) {
		controlsForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const hours  = parseInt(event.target.hourInput.value, 10);
			const mins   = parseInt(event.target.minuteInput.value, 10);
			const period = this.alarmClock.period;
			this.setHourandMinuteInputStates(event.target.hourInput, event.target.minuteInput, hours, mins);
			this.tryCreateAndSetAlarm(hours, mins, period);
		});
	}

}

export default Controller;
