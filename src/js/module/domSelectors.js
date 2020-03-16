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
 * [Querying the DOM for the calculator based on a selector]
 * @type {Object}
 */
export const myCalc = document.querySelector('.calc');

/**
 * [Querying the DOM for the display based on a selector]
 * @type {Object}
 */
export const ui = myCalc.querySelector('.calc__ui');

/**
 * [Querying the DOM for the keys based on a selector]
 * @type {Object}
 */
export const keys = myCalc.querySelector('.calc__numpad');
