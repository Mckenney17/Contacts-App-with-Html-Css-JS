/* eslint-disable no-unused-expressions */
import {
    event, classAction, resetModal, selectorAll, selector,
} from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
const {
    addNewBtn, selectModal,
    optionsBtn, newContactModal, inputCont,
    fakePlaceholder, input, contactDiv,
    searchBarBtns, checkBoxes, deleteBtn,
    allSelect, cancelOpr,
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

const toggleSelection = (ev) => {
    const action = [...ev.target.classList].includes('select') ? 'add' : 'remove';
    const actionAlt = [...ev.target.classList].includes('select') ? 'remove' : 'add';
    [...selectorAll('.contact_div'), searchBarBtns].map((el) => classAction(el, action, 'anim_sel_click'));
    setTimeout(() => {
        [...selectorAll('.check_box')].map((el) => classAction(el, action, 'grow_box'));
        classAction(deleteBtn, action, 'grow_font');
        classAction(cancelOpr, action, 'grow_font');
        if (actionAlt === 'remove') {
            classAction(selectModal, actionAlt, 'animate_opt_cont_modal');
            classAction(selectModal, actionAlt, 'anim_opt_click');
        }
        [...ev.target.classList].includes('select')
        ? optionsBtn.removeEventListener('click', toggleSelectionModal)
        : event(optionsBtn, 'click', toggleSelectionModal);
    }, 0);
};

export {
 toggleNewContactModal, toggleSelectionModal, toggleSelection,
};
