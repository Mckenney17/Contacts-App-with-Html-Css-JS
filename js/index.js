import DOMStrings from '../modules/DOMStrings.js';
import { event } from '../modules/functionsUI.js';

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


event(addNewBtn, 'click', toggleNewContactModal);
event(optionsBtn, 'click', toggleSelectionModal);
[...allSelect].map((el) => event(el, 'click', activateDeletionMode));
event(cancelOpr, 'click', deactivateDeletionMode);
event(deleteBtn, 'click', () => {
    deleteSelected();
    deactivateDeletionMode();
});


event(saveBtn, 'click', () => {
    const { contactDataForApp, uniqueKey } = contactData();
    allContacts.set(uniqueKey, new Contact(contactDataForApp));
});

event(searchInput, 'input', () => {
    filterUIContacts(filteredContacts());
});
