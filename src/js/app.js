/**
 * To build this calculator I will be using the dataset API as described here:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset.
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
 * 2)
 * Need to calculate each possible operation based on the selectors:
 *
 * (Listing of operators based on operator precedence)
 *
 * multiply operation.
 * divide operation.
 * add operation.
 * subtract operation.
 * -----------------------------------------------------------------------------
 *
 * 3)
 * Next we need to figure out which keys have been pressed ['multiply', 'divide',
 * 'add', 'subtract', 'clear', 'save', 'float', 'equals', 0, 1, 2, 3, 4, 5, 6, 7,
 *  8, 9].
 *
 * Then we will assign these keys to values and will return either a number,
 * operation or a task based on a conditional.
 * -----------------------------------------------------------------------------
 *
 * 4)
 * We need a function that returns what needs to be displayed by the calculator
 * and this should return the final parsed value.
 *
 * This function needs to take a few parameters including:
 *
 * A key.
 *
 * The current numberdisplayed in the UI.
 *
 * State object which holds the parameters for out logic for which keys are
 * pressed and in qhat sequence. Depending on the sequence we will do different
 * operations. (Initial Value, operation, A modified value and previous key 
 * type pressed).
 *
 * If clear is pressed reset the value to 0
 * If the key type is a number...
 * if the key type is a decimal/float...
 * If the key is an operation...
 * If the key is equals...
 * If the key is save...
 */
