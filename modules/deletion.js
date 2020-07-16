import {
    selectorAll, classAction, setProp,
} from './functionsUI.js';
import allContacts from './allContacts.js';

const deleteSelectedContacts = () => {
        const selected = [...selectorAll('.selectedForDeletion')];
        if (selected.length !== 0) {
            const uniqueKeys = selected.map((el) => {
                const grabKey = el.id.slice(el.id.lastIndexOf('_') + 1);
                return grabKey;
            });
            uniqueKeys.map((key) => allContacts.delete(key));

            for (const el of selected) {
                const parent = el.parentNode.parentNode;
                classAction(parent, 'remove', 'appear');
                setTimeout(() => {
                    if ([...parent.parentNode.children].length < 2) {
                        setProp(parent.parentNode.parentNode, 'outerHTML', '');
                    } else {
                        setProp(parent, 'outerHTML', '');
                    }
                }, 300);
            }
        }
};
export default deleteSelectedContacts;
// all good
