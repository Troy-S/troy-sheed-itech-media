/**
 * This module will be used to update out calculators UI.
 *
 * 5)
 * We need a function which can handle all of our custom attirbutes that are
 * going to be set (from parseOperations.js). This will ultimately handle the
 * aesthetics for our UI.
 *
 * This function needs to take a few parameters including:
 *
 * - A Key (from keyType.js)
 * - Using the Calculator dom selector (from domSelectors.js)
 *    - DOMSelector.dataset will be destructured and include
 *      the same values as our state object:
 *      - An initial value.
 *      - An operation.
 *      - A modified value.
 *      - Previous key type pressed.
 * - Our function which handles our operations (from parseOperations.js)
 * - The current number displayed in the UI.
 *
 * If key is an operation...
 * If key is equals...
 * if key is clear...
 * etc...
 */

import isKeyType from './keyType';

/**
 * [This function will handle all the custom attributes and the aesthetics of
 *  the UI. I have split this logic up from the finalParsedValue as this is
 *  similar but slightly different and would be confusing to have the logic in
 *  the same file. ]
 * @param  {Object}  key       [Key from keyType.js]
 * @param  {Object}  myCalc    [DOM Query selector]
 * @param  {Number}  sumValue  [The calculated number]
 * @param  {String}  uiNum     [The currently displayed string in the UI]
 */
const uiState = (key, myCalc, sumValue, uiNum) => {
    const typeOfKey = isKeyType(key);
    /* Destructuring the myCalc.dataset object to use later on. */

    const {
        initialValue,
        operation,
        modifiedValue,
        prevKeyType
    } = myCalc.dataset;

    /* Assigning the prevKeyType to isKeyType(key) and using that key name. */
    myCalc.dataset.prevKeyType = typeOfKey;

    /* If typeOfKey pressed was an operation */
    if (typeOfKey === 'operation') {
        /* Dataset Operation is now the id pressed. */
        /* Dataset initial Value is now the intial Value. */
        myCalc.dataset.operation = key.dataset.id;
        myCalc.dataset.initialValue = initialValue
            /*
             * Checking that these conditions are met:
             * If operation was pressed &&
             * If the prevKeyType is not an operation &&
             * If the prevKeyType is not equals.
             */
            && operation
            && prevKeyType !== 'operation'
            && prevKeyType !== 'equals'
            /*
             * If true then displated the sumValue (The calculated value from
             * the initial Value).
             */
            ? sumValue
            /*
             * Else just display the currently displayed numnber.
             */
            : uiNum;
    }

    /* If the typeOfKey is equals */
    if (typeOfKey === 'equals') {
        /*
         * Set the initialValue to the modifiedValue and if the prevKeyType is
         * equals then run the ternary operator.
         */
        myCalc.dataset.modifiedValue = initialValue && prevKeyType === 'equals'
            /* If true then display the modifiedValue */
            ? modifiedValue
            /* Else display the initialValue */
            : uiNum;
    }

    /* If the typeOfKey is clear */
    if (typeOfKey === 'clear') {
        /* Reset all attributes to be empty */
        myCalc.dataset.initialValue = '';
        myCalc.dataset.modifiedValue = '';
        myCalc.dataset.operation = '';
        myCalc.dataset.prevKeyType = '';
    }
};

export default uiState;
