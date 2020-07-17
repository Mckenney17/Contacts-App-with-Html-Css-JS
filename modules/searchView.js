import {
 setStyle, selectorAll, classAction, insertHtml, selector, setProp,
} from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
const { contactsDiv } = DOMStrings;

const filterUIContacts = (filteredContacts) => {
    if (!filteredContacts) {
        for (const el of [...selectorAll('.contact_div')]) {
            setStyle(el, 'display', 'flex');
            setTimeout(() => {
                classAction(el, 'add', 'appear');
            }, 0);
        }
        [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));
        if (selector('.no-matching-contacts')) {
            setProp(selector('.no-matching-contacts'), 'outerHTML', '');
        }
        return;
    }
    for (const el of [...selectorAll('.contact_div')]) {
        setStyle(el, 'display', 'flex');
        setTimeout(() => {
            classAction(el, 'add', 'appear');
        }, 0);
    }
    [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));
    if (selector('.no-matching-contacts')) {
        setProp(selector('.no-matching-contacts'), 'outerHTML', '');
    }

    for (const el of filteredContacts) {
        classAction(el, 'remove', 'appear');
        const howManyRemains = [...el.parentNode.children].filter((ch) => ch.style.display !== 'none').length;
        if (howManyRemains < 2) {
            setStyle(el.parentNode.parentNode, 'display', 'none');
            if ([...selectorAll('.contact_class')].every((cc) => cc.style.display === 'none')) {
                insertHtml(contactsDiv, 'afterbegin', '<div class="no-matching-contacts">No matching Contacts</div>');
            }
        } else {
            setStyle(el, 'display', 'none');
        }
    }
};

export default filterUIContacts;
// all good
