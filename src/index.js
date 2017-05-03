'use strict';

import Clock from './clock';
import AlarmClock from './alarmClock';
import Display from './display';
import Controller from './controller';
import Timer from './timer';

// Elements
const hours   = document.getElementById('hours');
const mins    = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period  = document.getElementById('period');

// MVC components
const ClockInstance        = new Clock();
const AlarmClockApp        = new AlarmClock(ClockInstance);
const AlarmClockDisplay    = new Display(hours, mins, seconds, period);
const AlarmClockController = new Controller(AlarmClockApp, ClockInstance, AlarmClockDisplay);
// Bind a callback for each Date object update called from the the timer
const TimerInstance        = new Timer(AlarmClockController.timerListener.bind(AlarmClockController));

// Initialize the clock display
AlarmClockDisplay.setTime(ClockInstance);

// Start the timer.
TimerInstance.initialize();
