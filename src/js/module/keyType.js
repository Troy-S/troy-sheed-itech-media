/**
 * This module will be used to to assign our dataset 'keys' into categories.
 *
 * 3)
 * Next we need to figure out which keys have been pressed ['multiply',
 * 'divide', add', 'subtract', 'clear', 'save', 'float', 'equals', 0, 1, 2, 3,
 * 4, 5, 6, 7, 8, 9].
 *
 * Then we will assign these keys to values and will return either a number,
 * operation or a id based on a conditional.
 * -----------------------------------------------------------------------------
 *
*/

/**
 * [This function is to determine which type of key was pressed and once the key
 *  has been procesed we will assign it a value which will be either a number,
 *  operation or it's neither of those then it should return an id.]
 * @param  {[String]}  key [Assigning a key to a type.]
 * @return {Boolean}       [Return a 'number' string, an 'operation' String
 *                          or an 'id' string.]
 */
const isKeyType = (key) => {
    /* Destructuring id from key.dataset */
    const { id } = key.dataset;

    /* If the key doesn't have a data-id then return a number */
    if (!id) return 'number';

    /* If the key is one of these id's then return an operation */
    if (
        id === 'multiply'
        || id === 'divide'
        || id === 'add'
        || id === 'subtract'
    ) return 'operation';

    /* If it matches neither then return an id */
    return id;
};

export default isKeyType;
