import { setStyle, selectorAll, classAction } from './functionsUI.js';

const filterUIContacts = (filteredContacts) => {
    if (!filteredContacts) {
        for (const el of [...selectorAll('.contact_div')]) {
            setStyle(el, 'display', 'flex');
            setTimeout(() => {
                classAction(el, 'add', 'appear');
            }, 0);
        }
        [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));
        return;
    }
    for (const el of [...selectorAll('.contact_div')]) {
        setStyle(el, 'display', 'flex');
        setTimeout(() => {
            classAction(el, 'add', 'appear');
        }, 0);
    }
    [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));

    for (const el of filteredContacts) {
        classAction(el, 'remove', 'appear');
        const howManyRemains = [...el.parentNode.children].filter((ch) => ch.style.display !== 'none').length;
        if (howManyRemains < 2) {
            setStyle(el.parentNode.parentNode, 'display', 'none');
        } else {
            setStyle(el, 'display', 'none');
        }
    }
};

export default filterUIContacts;
// all good
