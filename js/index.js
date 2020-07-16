import DOMStrings from '../modules/DOMStrings.js';
import { event, repeat } from '../modules/functionsUI.js';

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

event([addNewBtn, optionsBtn, cancelOpr, deleteBtn, saveBtn, searchInput], [...repeat('click', 5), 'input'],
[
    toggleNewContactModal,
    toggleSelectionModal,
    deactivateDeletionMode,
    () => {
        deleteSelected();
        deactivateDeletionMode();
    },
    () => {
        const { contactDataForApp, uniqueKey } = contactData();
        allContacts.set(uniqueKey, new Contact(contactDataForApp));
    },
    () => {
        filterUIContacts(filteredContacts());
    },
]);

// powerful refactoring, couldn't believe it
