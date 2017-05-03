'use strict';

import Clock from './clock';
import AlarmClock from './alarmClock';
import Display from './display';
import Controller from './controller';
import Timer from './timer';

// Elements
const hours  = document.getElementById('hours');
const mins   = document.getElementById('minutes');
const period = document.getElementById('period');

// MVC components
const ClockInstance        = new Clock();
const AlarmClockApp        = new AlarmClock(ClockInstance);
const AlarmClockDisplay    = new Display(hours, mins, period);
const AlarmClockController = new Controller(AlarmClockApp, ClockInstance, AlarmClockDisplay);
const TimerInstance        = new Timer(AlarmClockController.timerListener.bind(AlarmClockController));

AlarmClockDisplay.setTime(ClockInstance);

TimerInstance.initialize();
