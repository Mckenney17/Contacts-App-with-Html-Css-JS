import DOMStrings from '../modules/DOMStrings.js';
import { event } from '../modules/functionsUI.js';

import {
 toggleNewContactModal, toggleSelectionModal,
} from '../modules/toggles.js';


import allContacts from '../modules/allContacts.js';
import contactData from '../modules/contactModel.js';
import Contact from '../modules/contactView.js';

import filterUIContacts from '../modules/searchView.js';
import filteredContacts from '../modules/searchModel.js';

const {
 addNewBtn, optionsBtn, saveBtn, searchInput,
} = DOMStrings;


event(addNewBtn, 'click', toggleNewContactModal);
event(optionsBtn, 'click', toggleSelectionModal);


event(saveBtn, 'click', () => {
    const { contactDataForApp, uniqueKey } = contactData();
    allContacts.set(uniqueKey, new Contact(contactDataForApp));
    console.log(allContacts);
});

event(searchInput, 'input', () => {
    filterUIContacts(filteredContacts());
});
