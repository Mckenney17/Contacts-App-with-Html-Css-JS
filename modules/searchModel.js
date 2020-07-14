import DOMStrings from './DOMStrings.js';
import { selectorAll } from './functionsUI.js';
const { searchInput } = DOMStrings;

const contactsFiltered = () => {
    const { value } = searchInput;
    if (value === '') return false;
    const nameHtml = [...selectorAll('.name')];
    const allNames = nameHtml.map((el) => el.textContent);
    const unMatchedNames = allNames.filter((name) => !name.toLowerCase().startsWith(value.toLowerCase()));
    const unMatchedContacts = unMatchedNames.map((name) => nameHtml.find((el) => el.textContent === name).parentNode.parentNode);

    return unMatchedContacts;
};

export default contactsFiltered;
