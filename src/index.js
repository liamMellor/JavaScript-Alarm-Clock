'use strict';

// Modules
import Clock from './clock';
import Timer from './timer';
// Application
import AlarmClock from './alarmClock';
// Views
import DisplayView from './views/displayView';
import ControlsView from './views/controlsView';
import AlarmsView from './views/alarmsView';
// Controller
import Controller from './controller';


// Display Elements
const hours        = document.getElementById('hours');
const mins         = document.getElementById('minutes');
const seconds      = document.getElementById('seconds');
const period       = document.getElementById('period');
// Control Elements
const controlsForm = document.getElementById('controlsForm');
const hourInput    = document.getElementById('hourInput');
const minuteInput  = document.getElementById('minuteInput');
const amButton     = document.getElementById('periodButton-am');
const pmButton     = document.getElementById('periodButton-pm');
// Alarms Elements
const alarms       = document.getElementById('alarms');
const alarmsError  = document.getElementById('alarmsError');


// Clock Instance stores date object for the app and can return hours, mins, etc.
const ClockInstance = new Clock();
// App Instance
const AlarmClockApp = new AlarmClock(ClockInstance);
// Initialize Views with DOM elements
const Display       = new DisplayView(hours, mins, seconds, period);
const Controls      = new ControlsView(hourInput, minuteInput, pmButton);
const Alarms        = new AlarmsView(alarms, alarmsError);
// AppController initializees listeners and carries out primary business logic
const AppController = new Controller(AlarmClockApp, ClockInstance, Display, Controls, Alarms);
// Timer keeps time for the app. appUpdater is passed as a callback for updated Date() (1 second)
const TimerInstance = new Timer(AppController.appUpdater.bind(AppController));


// Initialize DOM listeners
AppController.addPeriodButtonListeners([amButton, pmButton]);
AppController.addControlsFormListener(controlsForm);


// Initialize the display
Display.setTime(ClockInstance);


// Start the timer.
TimerInstance.initialize();
