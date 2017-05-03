'use strict';

/*
* Plays an alarm tone from the internet.
*/
const ringer = () => {
	const sound = new Audio('https://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav');
	sound.play();
}

export default ringer;
