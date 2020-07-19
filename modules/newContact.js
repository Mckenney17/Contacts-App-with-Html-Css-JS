// Get input values and check for errors
import DOMStrings from './DOMStrings.js';
import {
    classAction, event, resetModal, classActionMulti,
} from './functionsUI.js';
import Addpic from './contactPicUpload.js';
const {
    emailInput, phoneInput, firstNameInput,
    lastNameInput, input, newContactModal,
    addNewBtn, contactPic, saveBtn,
} = DOMStrings;


// Validation Functions
const checkEmpty = (param) => {
    if (param.value === '') {
        return false;
    }
    return true;
};

const checkWrongMailInput = (param) => {
    if (param.value.length > 0 && !param.value.match(/^[A-Za-z0-9]([A-Za-z0-9_]|(?<![._])\.(?![._]))*(?<![._])@([A-Za-z0-9_]+((?<![._])\.(?![._])))+[A-Za-z0-9]+$/)) {
        classAction(param.parentNode, 'add', 'error_alert');
        return false;
    }
    classAction(param.parentNode, 'remove', 'error_alert');
    return true;
};

const checkWrongFirstnameInput = (param) => {
    if (param.value.length > 0 && param.value.match(/\W+/)) {
        classAction(param.parentNode, 'add', 'error_alert');
        return false;
    }
    classAction(param.parentNode, 'remove', 'error_alert');
    return true;
};

const checkWrongLastnameInput = (param) => {
    if (param.value.length > 0 && param.value.match(/\W+/)) {
        classAction(param.parentNode, 'add', 'error_alert');
        return false;
    }
    classAction(param.parentNode, 'remove', 'error_alert');
    return true;
};

const checkWrongPhoneInput = (param) => {
    if (param.value.length > 0 && param.value.match(/[^+\d+]+|([+\d+][A-Za-z_\W]+)/)) {
        classAction(param.parentNode, 'add', 'error_alert');
        return false;
    }
    classAction(param.parentNode, 'remove', 'error_alert');
    return true;
};

const disable = (btn) => {
    btn.setAttribute('disabled', '');
    classAction(btn, 'add', 'btn_disabled');
};

const enable = (btn) => {
    btn.removeAttribute('disabled');
    classAction(btn, 'remove', 'btn_disabled');
};

const liveValidation = (ev) => {
    if (ev) {
        if (!checkEmpty(firstNameInput) || !checkEmpty(phoneInput)) {
            disable(saveBtn);
        } else if (checkWrongPhoneInput(phoneInput)
                && checkWrongMailInput(emailInput)
                && checkWrongFirstnameInput(firstNameInput)
                && checkWrongLastnameInput(lastNameInput)) {
            enable(saveBtn);
        } else {
            disable(saveBtn);
        }


        if (ev.target === phoneInput) {
            checkWrongPhoneInput(phoneInput);
        }

        if (ev.target === emailInput) {
            checkWrongMailInput(emailInput);
        }

        if (ev.target === firstNameInput) {
            checkWrongFirstnameInput(firstNameInput);
        }

        if (ev.target === lastNameInput) {
            checkWrongLastnameInput(lastNameInput);
        }
    }
};

let picUrl = null;
event(contactPic, 'change', () => {
    Addpic().then((url) => {
        picUrl = url;
    });
});

const fetchVals = () => {
    const res = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phoneNumber: phoneInput.value,
        'E-mail': emailInput.value,
        picUrl,
    };
    resetModal();
    classActionMulti([
        {
            elem: newContactModal,
            action: 'toggle',
            classes: ['modal_disp'],
        },
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
    return res;
};

[...input].map((el) => event(el, 'input', liveValidation));
event(addNewBtn, 'click', () => {
    picUrl = '';
});

export default fetchVals;
// refactored
