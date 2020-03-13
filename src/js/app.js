/**
 * Following the AirBnb style guide for es6
 *
 * The guide can be found here:
 * https://github.com/airbnb/javascript
 *
*/

import { myCalc, ui, keys } from './module/domSelectors';

import isKeyType from './module/keyType';

import parseOperations from './module/parseOperations';

import finalParsedValue from './module/finalParsedVal';

import uiState from './module/uiState';

/* Using this Event Listener to initiate calculator. */
keys.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const key = e.target;
    const uiNum = ui.textContent;
    const result = finalParsedValue(key, uiNum, myCalc.dataset);
    ui.textContent = result;
    uiState(key, myCalc, result, uiNum);
});
