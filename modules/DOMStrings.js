const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);
const DOMStrings = {
    contactsDiv: selector('.contacts_div'),
    addNewBtn: selector('.add_new_contact_btn'),
    optionsBtn: selector('#options_btn'),
    selectModal: selector('.options_cont'),
    select: selector('#select_pick'),
    selectAll: selector('#select_all'),
    newContactModal: selector('.add_new_contact_modal'),
    inputCont: selectorAll('.inp_cont'),
    fakePlaceholder: selectorAll('.fake_placeholder'),
    input: selectorAll('.input'),
    saveBtn: selector('.save_btn'),
    emailInput: selector('#em_input'),
    phoneInput: selector('#pn_input'),
    firstNameInput: selector('#fn_input'),
    lastNameInput: selector('#ln_input'),
};

export default DOMStrings;
