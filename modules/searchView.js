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
        setStyle(el, 'display', 'none');
        classAction(el, 'remove', 'appear');

        if ([...el.parentNode.children].every((ch) => ch.style.display === 'none')) {
            setStyle(el.parentNode.parentNode, 'display', 'none');
        }
    }
};

export default filterUIContacts;
