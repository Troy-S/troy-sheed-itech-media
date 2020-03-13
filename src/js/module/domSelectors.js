/**
 * This module will be used to create the DOM Selectors.
 *
 * To build this calculator I will be using the dataset API as described here:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
 * -----------------------------------------------------------------------------
 *
 * 1)
 * Need to query the DOM for 3 different selectors:
 *
 * Calculator selector target for our project.
 * UI selector - to show the calculation.
 * Keys selector - to record the keys pressed.
 * -----------------------------------------------------------------------------
 *
*/

/**
 * [myCalc description]
 * @type {[String]}
 */
export const myCalc = document.querySelector('.calc');

/**
 * [display description]
 * @type {[String]}
 */
export const display = myCalc.querySelector('.calc__ui');

/**
 * [keys description]
 * @type {[String]}
 */
export const keys = myCalc.querySelector('.calc__numpad');

console.log(keys);
