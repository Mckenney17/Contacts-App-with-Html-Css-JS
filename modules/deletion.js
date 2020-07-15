import { selectorAll, event } from './functionsUI.js';
const selectedContacts = () => {
    [...selectorAll('.check_box')].map((el) => event(el, 'click', () => {

    }));
};
