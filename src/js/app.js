/**
 * Following the AirBnb style guide for es6
 *
 * The guide can be found here:
 * https://github.com/airbnb/javascript
 *
*/

import { myCalc, ui, keys } from './module/domSelectors';

import parseOperations from './module/parseOperations';

import isKeyType from './module/keyType';

import finalParsedValue from './module/finalParsedVal';

/* Testing the event listener works with dataset. Using this to initiate the
 * calculator.
 */
keys.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const key = e.target;
    const uiNum = ui.textContent;
    const result = finalParsedValue(key, uiNum, myCalc.dataset);
    ui.textContent = result;
});
