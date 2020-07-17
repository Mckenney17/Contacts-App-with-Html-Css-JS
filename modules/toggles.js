import {
    event, classAction, resetModal, selectorAll, classActionMulti, insertHtml, setProp, setStyle,
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
        classActionMulti([
            {
                elem: newContactModal,
                action: 'toggle',
                classes: ['animate_modal'],
            },
            {
                elem: addNewBtn,
                action: 'toggle',
                classes: ['animate_add_btn'],
            },
        ]);
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
                classActionMulti([
                    {
                        elem: el,
                        action: 'remove',
                        classes: ['input_filled'],
                    },
                    {
                        elem: el,
                        action: 'add',
                        classes: ['input_focused'],
                    },
                ]);
            } else {
                classActionMulti([
                    {
                        elem: el,
                        action: 'add',
                        classes: ['input_filled'],
                    },
                    {
                        elem: el,
                        action: 'remove',
                        classes: ['input_focused'],
                    },
                ]);
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

const activateDeletionMode = (ev) => {
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
    setStyle(addNewBtn, 'display', 'none');
    classActionMulti([
        {
            elem: deleteBtn,
            action: 'add',
            classes: ['grow_font'],
        },
        {
            elem: cancelOpr,
            action: 'add',
            classes: ['grow_font'],
        },
        {
            elem: selectModal,
            action: 'remove',
            classes: ['animate_opt_cont_modal', 'anim_opt_click'],
        },
    ]);
    optionsBtn.removeEventListener('click', toggleSelectionModal);
    p.then(() => {
        [...selectorAll('.check_box')].map((el) => classAction(el, 'add', 'grow_box'));
        if (ev.target.id === 'select_pick') {
            for (const el of [...selectorAll('.check_box')]) {
                classAction(el, 'remove', 'selectedForDeletion');
                event(el, 'click', () => {
                    classAction(el, 'toggle', 'selectedForDeletion');
                });
            }
        } else {
            for (const el of [...selectorAll('.check_box')]) {
                classAction(el, 'add', 'selectedForDeletion');
                event(el, 'click', () => {
                    classAction(el, 'toggle', 'selectedForDeletion');
                });
            }
        }
    });
};

const deactivateDeletionMode = () => {
    [...selectorAll('.contact_div'), searchBarBtns].map((el) => classAction(el, 'remove', 'anim_sel_click'));
    setStyle(addNewBtn, 'display', 'flex');
    setTimeout(() => {
        [...selectorAll('.check_box')].map((el) => setProp(el, 'outerHTML', ''));
        classActionMulti([
            {
                elem: deleteBtn,
                action: 'remove',
                classes: ['grow_font'],
            },
            {
                elem: cancelOpr,
                action: 'remove',
                classes: ['grow_font'],
            },
        ]);
        event(optionsBtn, 'click', toggleSelectionModal);
    });
};

export {
 toggleNewContactModal, toggleSelectionModal, activateDeletionMode, deactivateDeletionMode,
};

// refactored
