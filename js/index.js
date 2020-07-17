import DOMStrings from '../modules/DOMStrings.js';
import { event, eventMulti } from '../modules/functionsUI.js';

import {
 toggleNewContactModal, toggleSelectionModal, activateDeletionMode, deactivateDeletionMode,
} from '../modules/toggles.js';


import allContacts from '../modules/allContacts.js';
import contactData from '../modules/contactModel.js';
import Contact from '../modules/contactView.js';

import filterUIContacts from '../modules/searchView.js';
import filteredContacts from '../modules/searchModel.js';

import deleteSelected from '../modules/deletion.js';

const {
 addNewBtn, optionsBtn, saveBtn, searchInput, allSelect, cancelOpr, deleteBtn,
} = DOMStrings;

[...allSelect].map((el) => event(el, 'click', activateDeletionMode));

eventMulti([
    {
        elem: addNewBtn,
        type: 'click',
        callback: toggleNewContactModal,
    },
    {
        elem: optionsBtn,
        type: 'click',
        callback: toggleSelectionModal,
    },
    {
        elem: cancelOpr,
        type: 'click',
        callback: deactivateDeletionMode,
    },
    {
        elem: deleteBtn,
        type: 'click',
        callback() {
            deleteSelected();
            deactivateDeletionMode();
        },
    },
    {
        elem: saveBtn,
        type: 'click',
        callback() {
            const { contactDataForApp, uniqueKey } = contactData();
            allContacts.set(uniqueKey, new Contact(contactDataForApp));
        },
    },
    {
        elem: searchInput,
        type: 'input',
        callback() {
            filterUIContacts(filteredContacts());
        },
    },
]);
// refactored
