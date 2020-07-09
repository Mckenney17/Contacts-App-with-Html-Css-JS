import {
 toggleNewContactModal, toggleSelectionModal, addNewBtn, optionsBtn, event,
} from '../modules/toggles.js';
import '../modules/contactModel.js';

event(addNewBtn, 'click', toggleNewContactModal);
event(optionsBtn, 'click', toggleSelectionModal);
