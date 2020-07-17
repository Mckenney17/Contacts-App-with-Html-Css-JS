const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);
const DOMStrings = {
    container: selector('.container'),
    contactsDiv: selector('.contacts_div'),
    searchBar: selector('.search_bar'),
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
    fakeContactPic: selector('.box_inner'),
    contactPicCont: selector('.upload_img'),
    contactPic: selector('#contactPic'),
    errorAlertBox: selector('.error_alert_box'),
    errorMessage: selector('.error_message'),
    okBtn: selector('#ok_btn'),
    searchInput: selector('.searcher'),
    checkBoxes: selectorAll('.check_box'),
    deleteBtn: selector('#delete_btn'),
    cancelOpr: selector('#cancel_opr'),
    allSelect: selectorAll('.select'),
    searchBarBtns: selector('.sbbtns'),
    noContactMessage: selector('.no-contact-message'),

    contactClass: selectorAll('.contact_class'),
};

export default DOMStrings;
