/* eslint-disable import/named */
/* eslint-disable no-unused-expressions */
import {
    setProp, event, classAction, selector,
} from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
import { newContactModal } from './dynamicGenCont.js';

const parElem = selector(DOMStrings.get('contactsDiv'));
const lastElem = parElem.children[parElem.children.length - 1];

const toggleNewContactModal = () => {
    selector(DOMStrings.get('newContactModal'))
    ? setProp(DOMStrings.get('newContactModal'), 'outerHTML', '')
    : lastElem.insertAdjacentHTML('beforebegin', newContactModal);
    setTimeout(() => {
        classAction(DOMStrings.get('newContactModal'), 'add', 'animate_modal');
        classAction(DOMStrings.get('addNewBtn'), 'toggle', 'animate_add_btn');
    }, 0);
};

const toggleSelectionModal = () => {
    classAction(DOMStrings.get('selectModal'), 'toggle', 'anim_opt_click');
    setTimeout(() => {
        classAction(DOMStrings.get('selectModal'), 'toggle', 'animate_opt_cont_modal');
    }, 0);
};

event(DOMStrings.get('addNewBtn'), 'click', toggleNewContactModal);
event(DOMStrings.get('optionsBtn'), 'click', toggleSelectionModal);
