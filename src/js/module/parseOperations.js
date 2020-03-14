/**
 * This module will be used to parse our operations.
 *
 * 2)
 * Need to calculate each possible operation based on the selectors (Listing of
 * operators based on operator precedence):
 *
 * multiply operation.
 * divide operation.
 * add operation.
 * subtract operation.
 * -----------------------------------------------------------------------------
 *
 */

/**
 * [Calculating each possible operation. Using parseFloat as we want to be able
 *  to use a floating number in our calculator.]
 * @param  {String}  digitOne  [First number pressed 0-9]
 * @param  {String}  operation [Operation pressed +, -, *, ÷, clear, dot, equals]
 * @param  {String}  digitTwo  [Second number pressed 0-9]
 * @return {Number}            [Checking if an operation equals one of these
 *                              If so then return the expression.]
 */
const parseOperations = (digitOne, operation, digitTwo) => {
    /* Storing parseFloat */
    const one = parseFloat(digitOne);
    const two = parseFloat(digitTwo);

    /* Multiplication */
    if (operation === 'multiply') {
        return one * two;
    }

    /* Division */
    if (operation === 'divide') {
        return one / two;
    }

    /* Addition */
    if (operation === 'add') {
        return one + two;
    }

    /* Subtraction */
    if (operation === 'subtract') {
        return one - two;
    }
};

export default parseOperations;
