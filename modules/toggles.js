/* eslint-disable no-unused-expressions */
import {
    event, classAction, resetModal,
} from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
const {
    addNewBtn, selectModal,
    optionsBtn, newContactModal, inputCont,
    fakePlaceholder, input,
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
    [...inputCont].map((el) => {
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
            classAction(el, 'remove', 'animate_input');
            classAction(el, 'remove', 'input_filled');
            classAction(el, 'remove', 'input_focused');
            classAction(el, 'remove', 'error_alert');
        }
    });
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

export {
 toggleNewContactModal, toggleSelectionModal, addNewBtn, optionsBtn, event,
};
