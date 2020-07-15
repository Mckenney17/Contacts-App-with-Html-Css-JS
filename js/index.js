import DOMStrings from '../modules/DOMStrings.js';
import { event } from '../modules/functionsUI.js';

import {
 toggleNewContactModal, toggleSelectionModal, toggleSelection,
} from '../modules/toggles.js';


import allContacts from '../modules/allContacts.js';
import contactData from '../modules/contactModel.js';
import Contact from '../modules/contactView.js';

import filterUIContacts from '../modules/searchView.js';
import filteredContacts from '../modules/searchModel.js';

const {
 addNewBtn, optionsBtn, saveBtn, searchInput, allSelect, cancelOpr,
} = DOMStrings;


event(addNewBtn, 'click', toggleNewContactModal);
event(optionsBtn, 'click', toggleSelectionModal);
[...allSelect].map((el) => event(el, 'click', toggleSelection));
event(cancelOpr, 'click', toggleSelection);


event(saveBtn, 'click', () => {
    const { contactDataForApp, uniqueKey } = contactData();
    allContacts.set(uniqueKey, new Contact(contactDataForApp));
    console.log(allContacts);
});

event(searchInput, 'input', () => {
    filterUIContacts(filteredContacts());
});
