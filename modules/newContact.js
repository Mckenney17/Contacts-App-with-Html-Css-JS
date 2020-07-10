// Get input values and check for errors
import DOMStrings from './DOMStrings.js';
import { classAction, event, resetModal } from './functionsUI.js';
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
    if (param.value.length > 0 && !param.value.match(/@(?=\w+\.)/)) {
        classAction(param.parentNode, 'add', 'error_alert');
        return false;
    }
    classAction(param.parentNode, 'remove', 'error_alert');
    return true;
};

const checkWrongPhoneInput = (param) => {
    if (param.value.startsWith('+')) {
        const x = param.value.slice('+');
        if (param.value.length > 1 && !Number(x)) {
            classAction(param.parentNode, 'add', 'error_alert');
            return false;
        }
        classAction(param.parentNode, 'remove', 'error_alert');
    } else if (param.value.match(/\D/)) {
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
        if (!checkEmpty(firstNameInput) || !checkEmpty(phoneInput) || !checkEmpty(emailInput)) {
            disable(saveBtn);
        } else if (checkWrongPhoneInput(phoneInput) && checkWrongMailInput(emailInput)) {
            enable(saveBtn);
        } else {
            disable(saveBtn);
        }


        if (ev.target.id === phoneInput.id) {
            checkWrongPhoneInput(phoneInput);
        }

        if (ev.target.id === emailInput.id) {
            checkWrongMailInput(emailInput);
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
    if (checkEmpty(firstNameInput)
    && checkEmpty(phoneInput)
    && checkEmpty(emailInput)
    && checkWrongMailInput(emailInput)
    && checkWrongPhoneInput(phoneInput)) {
        const res = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phoneNumber: phoneInput.value,
            'E-mail': emailInput.value,
            picUrl,
        };
        resetModal();
        classAction(newContactModal, 'toggle', 'modal_disp');
        classAction(newContactModal, 'toggle', 'animate_modal');
        classAction(addNewBtn, 'toggle', 'animate_add_btn');
        return res;
    }


    if (!checkWrongMailInput(emailInput)) {
        classAction(emailInput.parentNode, 'add', 'error_alert');
    }
    if (!checkWrongMailInput(phoneInput)) {
        classAction(phoneInput.parentNode, 'add', 'error_alert');
    }

    [firstNameInput, emailInput, phoneInput].map((el) => el.value === '' && classAction(el.parentNode, 'add', 'error_alert'));
    return false;
};

[...input].map((el) => event(el, 'input', liveValidation));
event(addNewBtn, 'click', () => {
    picUrl = '';
});


export default fetchVals;
