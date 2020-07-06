const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);

const classAction = (el, action, classValue) => {
    selector(el)?.classList[action](classValue);
};

const setStyle = (el, prop, value) => {
    if(!selector(el)) return;
    selector(el).style[prop] = value;
};

const insertHtml = (elem, where, html) => {
    selector(elem)?.insertAdjacentHTML(where, html);
};

const setProp = (elem, prop, value) => {
    if(!selector(elem)) return;
    selector(elem)[prop] = value;
};

const event = (elem, action, callback) => {
    selector(elem)?.addEventListener(action, callback);
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml, setProp, event,
};
