/* eslint-disable array-callback-return */
import DOMStrings from './DOMStrings.js';
const {
 inputCont, fakeContactPic, contactPicCont, saveBtn,
} = DOMStrings;

const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);

const classAction = (el, action, ...classValue) => {
    if (!el) return;
    el.classList[action](...classValue);
};

const setStyle = (el, prop, value) => {
    if (!el) return;
    el.style[prop] = value;
};

const insertHtml = (elem, where, html) => {
    if (!elem) return;
    elem.insertAdjacentHTML(where, html);
};

const setProp = (elem, prop, value) => {
    if (!elem) return;
    elem[prop] = value;
};

const event = (elem, action, callback) => {
    if (!elem) return;
    elem.addEventListener(action, callback);
};

const resetModal = () => {
    [...inputCont].map((el) => {
        setProp(el.children[0], 'value', '');
        classAction(el, 'remove', 'animate_input', 'input_filled', 'input_focused', 'error_alert');
    });
    setStyle(fakeContactPic, 'display', 'flex');
    classAction(contactPicCont, 'remove', 'makePicBg');
    setStyle(contactPicCont, 'background', '#8AB4F8');
    saveBtn.setAttribute('disabled', '');
    classAction(saveBtn, 'add', 'btn_disabled');
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml, setProp, event, resetModal,
};
