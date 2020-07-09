/* eslint-disable array-callback-return */
import DOMStrings from './DOMStrings.js';
const {
 inputCont, fakeProfilePic, profilePic, profilePicCont,
} = DOMStrings;

const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);

const classAction = (el, action, classValue) => {
    if (!el) return;
    el.classList[action](classValue);
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
        classAction(el, 'remove', 'animate_input');
        classAction(el, 'remove', 'input_filled');
        classAction(el, 'remove', 'input_focused');
        classAction(el, 'remove', 'error_alert');
    });
    setStyle(fakeProfilePic, 'display', 'flex');
    classAction(profilePicCont, 'remove', 'makePicBg');
    setStyle(profilePicCont, 'background', '#1a73e8');
    setProp(profilePic, 'value', '');
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml, setProp, event, resetModal,
};
