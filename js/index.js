import {
 toggleNewContactModal, toggleSelectionModal,
} from '../modules/toggles.js';

import DOMStrings from '../modules/DOMStrings.js';
import { event } from '../modules/functionsUI.js';

import allContacts from '../modules/allContacts.js';
import contactData from '../modules/contactModel.js';
import Contact from '../modules/contactView.js';

const { addNewBtn, optionsBtn, saveBtn } = DOMStrings;


event(addNewBtn, 'click', toggleNewContactModal);
event(optionsBtn, 'click', toggleSelectionModal);


event(saveBtn, 'click', () => {
    allContacts[Object.keys(allContacts).length] = new Contact(contactData());
});
