/**
 * This module will be used to to assign our dataset 'keys' into categories
 * either a number, operation or id.
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
 * [This function is to determine which type of key was pressed and once the
 * key has been processed we will assign it a value which will be either a
 * number, operation or it's neither of those, a id.]
 * @param  {type}    key [Assigning a Key to a type]
 * @return {Boolean}     [Return a number || operation || id based on the
 *                        conditional]
 */
const isKeyType = (key) => {
    /* Destructuring the id from dataset API */
    const { id } = key.dataset;
    /* If the key isn't an id then return a number. */
    if (!id) return 'number';
    /* If the key is one of these ids then return an operation. */
    if (
        id === 'multiply'
      || id === 'add'
      || id === 'subtract'
      || id === 'divide'
    ) return 'operation';
    /* Otherwise return a id. */
    return id;
};

export default isKeyType;
