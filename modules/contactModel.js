/* eslint-disable consistent-return */
import fetchVals from './newContact.js';

const manipulatedDataForApp = () => {
    const contactDataByUser = fetchVals();
    if (!contactDataByUser) return;
    const {
 firstName, lastName, phoneNumber, 'E-mail': email, picUrl,
} = contactDataByUser;

    const contactDataForApp = {
        initial: lastName ? lastName[0] : firstName[0],
        firstName,
        lastName,
        phoneNumber,
        email,
        picUrl,
        color: ['#fa903e', '#5bb974', '#fcc934', '#ee675c', '#4ecde6', '#af5cf7'][Math.trunc(Math.random() * 6)],
    };
    return contactDataForApp;
};

export default manipulatedDataForApp;
