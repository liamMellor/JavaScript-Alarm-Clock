# JavaScript-Alarm-Clock

A handy little alarm clock built with javascript and SystemJS

## Run the Project

You can serve the app on a mini server for yourself by following these commands.

1. cd into the main directory (/JavaScript-Alarm-Clock) and install the local packages:
	`npm install`
2. Build Styles
	`npm run styles`
3. Run Gulp:
	`gulp`
4. Run the server:
	`control + c (together to quit Gulp)`
	`npm start`

## The Alarm Clock

The Alarm Clock is built with ES6 JavaScript modules and classes. Since there is no native broweser support ES6 imports, we use SystemJS to load the modules and Babel to transpile to browser friendly es5 :)

## Further Steps:

Sometime soon I'd like to:

1. uglify and minify the code so it doesn't take up so much space.

2. Improve on the design. I think it looks nice but it could look NICER!

3. Prevent duplicate alarms from being added to the list.

4. Add a visual component to an alarm going off to go along with the audio.

5. Remove an alarm from the list when it rings.

6. Implement an on/off toggle for individual alarms.

7. Add day of the week support.

8. DAY AND NIGHT MODE TOGGLE!
