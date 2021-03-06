import fetchVals from './newContact.js';

const manipulatedDataForApp = () => {
    const contactDataByUser = fetchVals();
    const {
 firstName, lastName, phoneNumber, 'E-mail': email, picUrl,
} = contactDataByUser;

    const uniqueKey = lastName ? [...lastName, ...firstName].map((ch) => ch.codePointAt().toString(16)).join('')
    : [...firstName].map((ch) => ch.codePointAt().toString(16)).join('');

    const contactDataForApp = {
        ctClass: lastName ? lastName[0].toUpperCase() : firstName[0].toUpperCase(),
        firstName,
        lastName,
        phoneNumber,
        email,
        picUrl,
        uniqueKey,
        color: ['#fa903e', '#5bb974', '#fcc934', '#ee675c', '#4ecde6', '#af5cf7'][Math.trunc(Math.random() * 6)],
    };
    return { contactDataForApp, uniqueKey };
};

export default manipulatedDataForApp;
// all good
