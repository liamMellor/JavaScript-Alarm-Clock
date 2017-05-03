'use strict';

// Modules
import Clock from './clock';
import Timer from './timer';
// App
import AlarmClock from './alarmClock';
// Views
import Display from './display';
import Controls from './controls';
// Controller
import Controller from './controller';


// Display Elements
const hours   = document.getElementById('hours');
const mins    = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period  = document.getElementById('period');
// Alarm Elements
const alarmform   = document.getElementById('alarmForm');
const hourInput   = document.getElementById('hourInput');
const minuteInput = document.getElementById('minuteInput');
const amButton    = document.getElementById('periodButton-am');
const pmButton    = document.getElementById('periodButton-pm');


// MVC components
const ClockInstance        = new Clock();
const AlarmClockApp        = new AlarmClock(ClockInstance);
const AlarmClockDisplay    = new Display(hours, mins, seconds, period);
// Pass pmButton as the initial active periodButton
const AlarmClockControls   = new Controls(hourInput, minuteInput, pmButton);
const AlarmClockController = new Controller(AlarmClockApp, ClockInstance, AlarmClockDisplay, AlarmClockControls);
// Bind a callback for each Date object update called from the the timer
const TimerInstance        = new Timer(AlarmClockController.appUpdater.bind(AlarmClockController));


// Initialize DOM listeners
AlarmClockController.addPeriodButtonListeners([amButton, pmButton]);
AlarmClockController.addAlarmFormListener(alarmform);

// Initialize the clock display
AlarmClockDisplay.setTime(ClockInstance);

// Start the timer.
TimerInstance.initialize();
