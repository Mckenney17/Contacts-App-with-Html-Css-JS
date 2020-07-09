/* eslint-disable consistent-return */
import { event } from './functionsUI.js';
import DOMStrings from './DOMStrings.js';
import fetchVals from './newContact.js';
const { saveBtn } = DOMStrings;

const randCol = () => `rgb(${Math.trunc(Math.random() * 136 + 100)}, ${Math.trunc(Math.random() * 136 + 100)}, ${Math.trunc(Math.random() * 136 + 100)})`;

const geneRatedProfileFromData = () => {
    const contactDataByUser = fetchVals();
    if (!contactDataByUser) return;
    const {
 FirstName, LastName, PhoneNumber, 'E-mail': email, picUrl,
} = contactDataByUser;

    const contactDataforApp = {
        initial: LastName ? LastName[0] : FirstName[0],
        LastName,
        PhoneNumber,
        email,
        picUrl,
        color: randCol(),
    };
    return contactDataforApp;
};

event(saveBtn, 'click', geneRatedProfileFromData);

export default geneRatedProfileFromData;
