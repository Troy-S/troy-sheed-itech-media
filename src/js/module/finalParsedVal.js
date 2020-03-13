/**
 * This module will be used to parse our final value.
 *
 * 4)
 * We need a function that returns what needs to be displayed by the calculator
 * and this should return the final parsed value.
 *
 * This function needs to take a few parameters including:
 *
 * - A key (from keyType.js).
 * - The current number displayed in the UI.
 * - State object which holds the parameters for our logic for which keys are
 * pressed and in what sequence. Depending on the sequence we will do different
 * operations and logic:
 *    - An initial value.
 *    - An operation.
 *    - A modified value.
 *    - Previous key type pressed.
 * If clear is pressed reset the value to 0
 * If the key type is a number...
 * if the key type is a decimal/float...
 * If the key is an operation...
 * If the key is equals...
 * If the key is save...
 * ---------------------------------------------------------------------------
 *
*/

import isKeyType from './keyType';
import parseOperations from './parseOperations';

/**
 * [This function returns what needs to be displayed by the calculator it return
 *  the final parsed value]
 * @param  {[String]}  key   [using key from isKeyType module]
 * @param  {[Number]}  uiNum [Assigned default value for when a number is pressed]
 * @param  {[Object]}  state [Initial state object and properties]
 * @return {[Boolean]}       [Return what to do based on the typeOfKey pressed]
 */
const finalParsedValue = (key, uiNum, state) => {
    /* Storing contents of a key */
    const contents = key.textContent;
    /* Assigning the type of key to a variable to use in out loigc later */
    const typeOfKey = isKeyType(key);

    /* Destructured State object which is going to handle our logic + UI State
     *(in uiState.js)
     */
    const {
        initialValue,
        modifiedValue,
        operation,
        prevKeyType
    } = state;

    /* Checking the keys contents to see if it is clear, if true then return 0
     * Testing to see if this function works in app.js when using
     * addEventListener.
     */
    if (typeOfKey === 'clear') return 0;

    /* If number key is pressed... */
    if (typeOfKey === 'number') {
        /* Do something */
    }

    /* If dot key is pressed... */
    if (typeOfKey === 'dot') {
        /* Do something */
    }

    /* If operation key is pressed... */
    if (typeOfKey === 'operation') {
        /* Do something */
    }

    /* If equals key is pressed... */
    if (typeOfKey === 'equals') {
        /* Do something */
    }

    /* If save key is pressed... */
    if (typeOfKey === 'save') {
        /* Do something */
    }
};

export default finalParsedValue;
