// /* eslint-disable array-callback-return */
import DOMStrings from './DOMStrings.js';
const {
 inputCont, fakeContactPic, contactPicCont, saveBtn,
} = DOMStrings;

const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);

const repeat = (value, times) => {
    const arr = [];
    for (let i = 0; i < times; i++) {
        arr.push(value);
    }
    return arr;
};

const classAction = (el, action, ...classValue) => {
    if (Array.isArray(el)) {
        if (!el) return;
        const subArray = classValue.flat();
        el.forEach((v, i) => {
            v.classList[action[i]](subArray[i]);
        });
    } else {
        if (!el) return;
        el.classList[action](...classValue);
    }
};

const setStyle = (el, prop, value) => {
    if (Array.isArray(el)) {
        if (!el) return;
        el.forEach((v, i) => {
            v.style[prop[i]] = value[i];
        });
    } else {
        if (!el) return;
        el.style[prop] = value;
    }
};

const insertHtml = (elem, where, html) => {
    if (!elem) return;
    elem.insertAdjacentHTML(where, html);
};

const setProp = (elem, prop, value) => {
    if (Array.isArray(elem)) {
        if (!elem) return;
        elem.forEach((v, i) => {
            v[prop[i]] = value[i];
        });
    } else {
        if (!elem) return;
        elem[prop] = value;
    }
};

const event = (elem, action, callback) => {
    if (Array.isArray(elem)) {
        if (!elem) return;
        elem.forEach((v, i) => {
            v.addEventListener(action[i], callback[i]);
        });
    } else {
        if (!elem) return;
        elem.addEventListener(action, callback);
    }
};

const resetModal = () => {
    for (const el of [...inputCont]) {
        setProp(el.children[0], 'value', '');
        classAction(el, 'remove', 'animate_input', 'input_filled', 'input_focused', 'error_alert');
    }
    setStyle([fakeContactPic, contactPicCont], ['display', 'background'], ['flex', '#8AB4F8']);
    classAction([contactPicCont, saveBtn], ['remove', 'add'], ['makePicBg', 'btn_disabled']);
    saveBtn.setAttribute('disabled', '');
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml, setProp, event, resetModal, repeat,
};
