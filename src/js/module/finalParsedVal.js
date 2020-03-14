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
 * @param  {String}  uiNum [Assigned default value for when a number is pressed]
 * @param  {Object}  state [Initial state object and properties]
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

    /* Checking typeOfKey: clear, if true then return 0 */
    if (typeOfKey === 'clear') return 0;

    /* Checking typeOfKey: save, if true then return 0 */
    if (typeOfKey === 'save') return 'Saved!';

    /* Checking typeOfKey: number */
    if (typeOfKey === 'number') {
        /*
         * if the displayed number is 0 or prevKeyType was an operator or an
         * equals then return the contents, else return the the number
         * displayed + the key's contents.
         */
        return uiNum === '0'
      || prevKeyType === 'operation'
      || prevKeyType === 'equals'
            ? contents
            : uiNum + contents;
    }

    /* Checking typeOfKey: dot */
    if (typeOfKey === 'dot') {
        /*
         * Checking if the displayed number does not include a '.' character
         * if the condition is true then return the uiNum preceded by a '.'
         */
        if (!uiNum.includes('.')) return `${uiNum}.`;
        /*
         * Else if the prevKeyType is an operator or prevKeyType is equals then
         * return this string '0.'
         */
        if (prevKeyType === 'operation' || prevKeyType === 'equals') return '0.';
        /*
         * If neither of the above match then return the currently displayed
         * number
         */
        return uiNum;
    }

    /* Checking typeOfKey: operation */
    if (typeOfKey === 'operation') {
        /*
         * If the user has pressed an initial Value and an operation key we want
         * to allow them to make continual calculations one after the other if
         * they want too.
         *
         * To do this we need to check the initialVal and the operation, if it's
         * succeeded by a number an operation and another number:
         * (0 + 1 = 1 + 2 = 3).
         *
         * To stop other clicks happening on the operation key pressed we check
         * if the next key pressed is also an operation, if true then we don't
         * do that calculation.
         *
         * This also means that we need to use the equals Fn when initialVal,
         * operator and the uiNum exist.
         *
         * If none of the above
         */
        return initialValue
            && operation
            && prevKeyType !== 'operation'
            && prevKeyType !== 'equals'
            /* If conditions true: Calculate value */
            ? parseOperations(initialValue, operation, uiNum)
            /* If conditions false: Display the number */
            : uiNum;
    }

    /* Checking typeOfKey: if it's equals */
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
