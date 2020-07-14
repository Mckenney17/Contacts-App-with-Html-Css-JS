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

if (localStorage.getItem('storedContacts')) {
    const storedContacts = JSON.parse(localStorage.getItem('storedContacts'));
    for (const o of Object.keys(storedContacts)) {
        allContacts[o] = new Contact(storedContacts[o]);
    }
}

event(saveBtn, 'click', () => {
    allContacts[Object.keys(allContacts).length] = new Contact(contactData());
    localStorage.setItem('storedContacts', JSON.stringify(allContacts));
});

event(searchInput, 'input', () => {
    filterUIContacts(filteredContacts());
});
