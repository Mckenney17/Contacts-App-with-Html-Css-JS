/* eslint-disable no-unused-expressions */
import {
    event, classAction, resetModal, selectorAll, selector, insertHtml, setProp,
} from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
const {
    addNewBtn, selectModal,
    optionsBtn, newContactModal, inputCont,
    fakePlaceholder, input, searchBarBtns,
    deleteBtn, cancelOpr,
} = DOMStrings;

// Showing the New Contact adder Modal
const toggleNewContactModal = () => {
    classAction(newContactModal, 'toggle', 'modal_disp');
    setTimeout(() => {
        classAction(newContactModal, 'toggle', 'animate_modal');
        classAction(addNewBtn, 'toggle', 'animate_add_btn');
    }, 0);
    [...input].map((el) => event(el, 'focus', inputPlaceholderAnim));
    [...fakePlaceholder].map((el) => event(el, 'click', inputPlaceholderAnim));
    resetModal();
};

// Input Placeholder Animation
const inputPlaceholderAnim = (ev) => {
    for (const el of [...inputCont]) {
        if (el.children[0].value !== '') {
            classAction(el, 'add', 'input_filled');
            if (ev.type === 'focus' && ev.target.id === el.children[0].id) {
                classAction(el, 'remove', 'input_filled');
                classAction(el, 'add', 'input_focused');
            } else {
                classAction(el, 'add', 'input_filled');
                classAction(el, 'remove', 'input_focused');
            }
        } else {
            classAction(el, 'remove', 'animate_input', 'input_filled', 'input_focused', 'error_alert');
        }
    }
    classAction(ev.target.parentNode, 'add', 'animate_input');
    if (ev.target.classList.contains('fake_placeholder')) {
        ev.target.previousElementSibling.focus();
    }
};

const toggleSelectionModal = () => {
    classAction(selectModal, 'toggle', 'anim_opt_click');
    setTimeout(() => {
        classAction(selectModal, 'toggle', 'animate_opt_cont_modal');
    }, 0);
};

const toggleDeletionMode = (ev) => {
    const contact = [...selectorAll('.contact')];
    if (contact.length === 0) return;
        const p = new Promise((resolve) => {
            for (const el of contact) {
                const grabKey = el.id.slice(el.id.lastIndexOf('_') + 1);
                const grabClass = el.id.charAt(el.id.lastIndexOf('_') - 1);
                insertHtml(el.previousElementSibling, 'beforeend', `<i class='far fa-square check_box' id="check_box_${grabClass}_${grabKey}"></i>`);
                resolve();
            }
        });
        [...selectorAll('.contact_div'), searchBarBtns].map((el) => classAction(el, 'add', 'anim_sel_click'));
        classAction(deleteBtn, 'add', 'grow_font');
        classAction(cancelOpr, 'add', 'grow_font');
        classAction(selectModal, 'remove', 'animate_opt_cont_modal');
        classAction(selectModal, 'remove', 'anim_opt_click');
        optionsBtn.removeEventListener('click', toggleSelectionModal);
        p.then(() => {
            [...selectorAll('.check_box')].map((el) => classAction(el, 'add', 'grow_box'));
            if (ev.target.id === 'select_pick') {
                [...selectorAll('.check_box')].map((el) => classAction(el, 'remove', 'selectedForDeletion'));
                [...selectorAll('.check_box')].map((el) => event(el, 'click', () => {
                    classAction(el, 'toggle', 'selectedForDeletion');
                }));
            } else {
                [...selectorAll('.check_box')].map((el) => classAction(el, 'add', 'selectedForDeletion'));
                [...selectorAll('.check_box')].map((el) => event(el, 'click', () => {
                    classAction(el, 'toggle', 'selectedForDeletion');
                }));
            }
        });
};

const toggleNormalMode = () => {
    [...selectorAll('.contact_div'), searchBarBtns].map((el) => classAction(el, 'remove', 'anim_sel_click'));
    setTimeout(() => {
        [...selectorAll('.check_box')].map((el) => setProp(el, 'outerHTML', ''));
        classAction(deleteBtn, 'remove', 'grow_font');
        classAction(cancelOpr, 'remove', 'grow_font');
        event(optionsBtn, 'click', toggleSelectionModal);
    });
    for (const el of [...selectorAll('.contacts')]) {
        if (!el.hasChildNodes()) {
            console.log('hi');
            setProp(el.parentNode, 'outerHTML', '');
        }
    }
};

export {
 toggleNewContactModal, toggleSelectionModal, toggleDeletionMode, toggleNormalMode,
};
