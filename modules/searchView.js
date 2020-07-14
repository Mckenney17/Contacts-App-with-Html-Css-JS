import { setStyle, selectorAll, classAction } from './functionsUI.js';

const filterUIContacts = (filteredContacts) => {
    if (!filteredContacts) {
        [...selectorAll('.contact_div')].map((el) => {
            setStyle(el, 'display', 'flex');
            setTimeout(() => {
                classAction(el, 'add', 'appear');
            });
        });
        [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));
        return;
    }
    [...selectorAll('.contact_div')].map((el) => {
        setStyle(el, 'display', 'flex');
        setTimeout(() => {
            classAction(el, 'add', 'appear');
        });
    });
    [...selectorAll('.contact_class')].map((el) => setStyle(el, 'display', 'flex'));

    filteredContacts.map((el) => {
        setTimeout(() => {
            classAction(el, 'remove', 'appear');
        }, 0);
        setStyle(el, 'display', 'none');

        if ([...el.parentNode.children].every((ch) => ch.style.display === 'none')) {
            setStyle(el.parentNode.parentNode, 'display', 'none');
        }
    });
};

export default filterUIContacts;
