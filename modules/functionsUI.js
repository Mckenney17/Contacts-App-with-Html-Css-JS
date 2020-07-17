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

const classAction = (elem, action, ...classes) => {
    elem.classList[action](...classes);
};

const classActionMulti = (objs) => {
    for (const { elem, action, classes } of objs) {
        elem.classList[action](...classes);
    }
};

const setStyleMulti = (objs) => {
    for (const { elem, prop, value } of objs) {
        elem.style[prop] = value;
    }
};

const setStyle = (elem, prop, value) => {
    elem.style[prop] = value;
};

const insertHtml = (elem, where, html) => {
    if (!elem) return;
    elem.insertAdjacentHTML(where, html);
};

const setPropMulti = (objs) => {
    for (const { elem, prop, value } of objs) {
        elem[prop] = value;
    }
};

const setProp = (elem, prop, value) => {
    elem[prop] = value;
};

const eventMulti = (objs) => {
    for (const { elem, type, callback } of objs) {
        elem.addEventListener(type, callback);
    }
};

const event = (elem, type, callback) => {
    elem.addEventListener(type, callback);
};

const resetModal = () => {
    for (const el of [...inputCont]) {
        setProp(el.children[0], 'value', '');
        classAction(el, 'remove', 'animate_input', 'input_filled', 'input_focused', 'error_alert');
    }
    setStyleMulti([
        {
            elem: fakeContactPic,
            prop: 'display',
            value: 'flex',
        },
        {
            elem: contactPicCont,
            prop: 'background',
            value: '#8AB4F8',
        },
    ]);
    classActionMulti([
        {
            elem: contactPicCont,
            action: 'remove',
            classes: ['makePicBg'],
        },
        {
            elem: saveBtn,
            action: 'add',
            classes: ['btn_disabled'],
        },
    ]);
    saveBtn.setAttribute('disabled', '');
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml,
    setProp, event, resetModal, classActionMulti, setStyleMulti,
    setPropMulti, eventMulti,
};
// refactored
