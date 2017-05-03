'use strict';

// Modules
import Clock from './clock';
import Timer from './timer';
// App
import AlarmClock from './alarmClock';
// Views
import DisplayView from './displayView';
import ControlsView from './controlsView';
// Controller
import Controller from './controller';


// Display Elements
const hours   = document.getElementById('hours');
const mins    = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period  = document.getElementById('period');


// Alarm Elements
const controlsForm = document.getElementById('controlsForm');
const hourInput    = document.getElementById('hourInput');
const minuteInput  = document.getElementById('minuteInput');
const amButton     = document.getElementById('periodButton-am');
const pmButton     = document.getElementById('periodButton-pm');


// MVC components
const ClockInstance          = new Clock();
const AlarmClockApp          = new AlarmClock(ClockInstance);
const AlarmClockDisplayView  = new DisplayView(hours, mins, seconds, period);
// Pass pmButton as the initial active periodButton
const AlarmClockControlsView = new ControlsView(hourInput, minuteInput, pmButton);
const AlarmClockController   = new Controller(AlarmClockApp, ClockInstance, AlarmClockDisplayView, AlarmClockControlsView);
// Bind a callback for each Date object update called from the the timer
const TimerInstance          = new Timer(AlarmClockController.appUpdater.bind(AlarmClockController));


// Initialize DOM listeners
AlarmClockController.addPeriodButtonListeners([amButton, pmButton]);
AlarmClockController.addControlsFormListener(controlsForm);

// Initialize the clock display
AlarmClockDisplayView.setTime(ClockInstance);

// Start the timer.
TimerInstance.initialize();
