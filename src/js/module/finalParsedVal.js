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
 * @param  {String}  key   [using key from isKeyType module]
 * @param  {Number}  uiNum [Assigned default value for when a number is pressed]
 * @param  {Object}  state [Initial state object and properties]
 * @return {Boolean}       [Return what to do based on the typeOfKey pressed]
 */
const finalParsedValue = (key, uiNum, state) => {
    /* Storing contents of a key */
    const contents = key.textContent;

    /* Assigning the type of key to a variable to use in out logic later */
    const typeOfKey = isKeyType(key);

    /*
     * Destructured State object which is going to handle our logic + UI State
     * (in uiState.js)
     */
    const {
        initialValue,
        operation,
        modifiedValue,
        prevKeyType
    } = state;

    /* Checking the keys contents to see if it is clear, if true then return 0 */
    if (typeOfKey === 'clear') return 0;

    /* Checking the keys contents to see if it's a number */
    if (typeOfKey === 'number') {
        /* Return the string '0' if the previous key type pressed was an
         * [÷, x, -, + or =]
         */
        return uiNum === '0'
      || prevKeyType === 'operation'
      || prevKeyType === 'equals'
            /* If the above condition is true then display the keys contents */
            ? contents
            /* If it is false then display the current uiNum + key.textContent */
            : uiNum + contents;
    }

    /* Checking the keys contents to see if it's a number */
    if (typeOfKey === 'dot') {
        /*
         * if the currently displayed number does not include a '.' then returns
         * the number
         */
        if (!uiNum.includes('.')) return `${uiNum}.`;
        /* if prevKeyType is an operation or an equals then return '0.' */
        if (prevKeyType === 'operation' || prevKeyType === 'equals') return '0.';
        /* Else return the current displayed number */
        return uiNum;
    }

    /*
     * If the key type is an operation Return initialvalue, operation and also
     * check the previous key type is !== to operation && equals
     */
    if (typeOfKey === 'operation') {
        /*
         * Return the initial value and operation and the prevKeyType if the
         * prevKeyType isn't an operation
         */
        return initialValue
      && operation
      && prevKeyType !== 'operation'
      && prevKeyType !== 'equals'
            /*
             * If the above condition is true then perform the parseOperations
             * function with those params
             */
            ? parseOperations(initialValue, operation, uiNum)
            /* Else just return the currently displayed number */
            : uiNum;
    }

    /* Checking the keys contents to see if it's equals */
    if (typeOfKey === 'equals') {
        /* If the typeOfKey is equals then return the initial Value */
        return initialValue
            /* If typeOfKey is equals and prevKeyType is also equals */
            ? prevKeyType === 'equals'
                /*
                 * Set the modifiedValue attribute as we want to carry forward
                 * the second calculation with a custom attribute from the
                 * state object.
                 */
                ? parseOperations(uiNum, operation, modifiedValue)
                /* Otherwise set the initialValue from the state object */
                : parseOperations(initialValue, operation, uiNum)
            /*
             * If none of the above are true then just display the currently
             * displayed number.
             */
            : uiNum;
    }
};

export default finalParsedValue;
