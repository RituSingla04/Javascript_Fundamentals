/**
 * ******************************
 * Switches
 * ******************************
 **/

/**
 * ********************
 * EXAMPLE 1: Color
 * ********************
 **/
const color = 'yellow';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'green':
        console.log('Color is green');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red, green or blue');
        break;
}

/**
 * ********************
 * EXAMPLE 2: Day
 * ********************
 **/
let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);