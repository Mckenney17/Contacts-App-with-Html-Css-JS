// contact class
import { contactBoilerPlate, contactGroupBoilerplate, contactProfile } from './boilerplates.js';
import DOMStrings from './DOMStrings.js';
import {
 insertHtml, selector, selectorAll, setStyle, setProp, classAction, event,
} from './functionsUI.js';
const {
 contactsDiv, newContactModal, errorAlertBox, errorMessage, okBtn, container, allSelect,
} = DOMStrings;


class Contact {
    constructor({
        ctClass, firstName, lastName, picUrl, color, uniqueKey, phoneNumber, email,
    }) {
        this.ctClass = ctClass;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picUrl = picUrl;
        this.color = color;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.name = this.lastName ? `${this.lastName} ${this.firstName}` : `${this.firstName}`;
        this.uniqueKey = uniqueKey;

        const listView = new Promise((resolve) => {
            if ([...selectorAll('.contact_class')].length === 0) {
                insertHtml(newContactModal, 'beforebegin', contactGroupBoilerplate(this.ctClass));
                resolve([...selectorAll(`#contacts_${this.ctClass} .contact_div`)]);
            } else {
                const classIDs = [...selectorAll('.contact_class')].map((el) => el.id);
                if (classIDs.includes(`class_${this.ctClass}`)) {
                    resolve([...selectorAll(`#contacts_${this.ctClass} .contact_div`)]);
                } else {
                    classIDs.push(`class_${this.ctClass}`);
                    const sortClassIDs = classIDs.sort((a, b) => a.localeCompare(b));
                    const classIndex = sortClassIDs.indexOf(`class_${this.ctClass}`);

                    if (classIndex === 0) {
                        insertHtml(contactsDiv, 'afterbegin', contactGroupBoilerplate(this.ctClass));
                        resolve([...selectorAll(`#contacts_${this.ctClass} .contact_div`)]);
                    } else if (classIndex === sortClassIDs.length - 1) {
                        insertHtml(newContactModal, 'beforebegin', contactGroupBoilerplate(this.ctClass));
                        resolve([...selectorAll(`#contacts_${this.ctClass} .contact_div`)]);
                    } else {
                        const where = selector(`#${sortClassIDs[classIndex - 1]}`);
                        insertHtml(where, 'afterend', contactGroupBoilerplate(this.ctClass));
                        resolve([...selectorAll(`#contacts_${this.ctClass} .contact_div`)]);
                    }
                }
            }
        });


        listView.then((contactGroupCont) => new Promise((resolve, reject) => {
            if (contactGroupCont.length === 0) {
                insertHtml(selector(`#contacts_${this.ctClass}`), 'beforeend',
                contactBoilerPlate(this.ctClass, this.name, this.uniqueKey));

                resolve(selector(`#fake_img_${this.ctClass}_${this.uniqueKey}`));
            } else {
                const contactNames = [...selectorAll(`.name_${this.ctClass}`)].map((el) => el.textContent);
                if (contactNames.includes(this.name)) {
                    reject(new Error('Contact name already exists'));
                } else {
                    contactNames.push(this.name);
                    const sortContactNames = contactNames.sort((a, b) => a.localeCompare(b));
                    const contactNameIndex = sortContactNames.indexOf(this.name);

                    if (contactNameIndex === 0) {
                        insertHtml(selector(`#contacts_${this.ctClass}`), 'afterbegin',
                        contactBoilerPlate(this.ctClass, this.name, this.uniqueKey));

                        resolve(selector(`#fake_img_${this.ctClass}_${this.uniqueKey}`));
                    } else if (contactNameIndex === sortContactNames.length - 1) {
                        insertHtml(selector(`#contacts_${this.ctClass}`), 'beforeend',
                        contactBoilerPlate(this.ctClass, this.name, this.uniqueKey));

                        resolve(selector(`#fake_img_${this.ctClass}_${this.uniqueKey}`));
                    } else {
                        const where = [...selectorAll(`.name_${this.ctClass}`)].find((el) => el.textContent === sortContactNames[contactNameIndex - 1]);
                        insertHtml(where.parentNode.parentNode, 'afterend',
                        contactBoilerPlate(this.ctClass, this.name, this.uniqueKey));

                        resolve(selector(`#fake_img_${this.ctClass}_${this.uniqueKey}`));
                    }
                }
            }
        })).then((contactFakeImg) => {
            if (this.picUrl) {
                setProp(contactFakeImg, 'textContent', '');
                setStyle(contactFakeImg, 'background', `url(${this.picUrl})`);
                classAction(contactFakeImg, 'add', 'makePicBg');
            } else {
                setStyle(contactFakeImg, 'background', `${this.color}`);
            }

            setTimeout(() => {
                classAction(selector(`#contact_div_${this.ctClass}_${this.uniqueKey}`), 'add', 'appear');
            }, 0);
            event(contactFakeImg.parentNode, 'click', () => { this.profileView(); });
            // [...allSelect].map((el) => event(el, 'click', (ev) => {
            //     this.deletionMode(ev);
            // }));
        }).catch((err) => {
            setStyle(errorAlertBox, 'display', 'flex');
            setProp(errorMessage, 'textContent', err.message);
            setTimeout(() => {
                classAction(errorAlertBox, 'add', 'appear');
            }, 0);
            event(okBtn, 'click', () => {
                classAction(errorAlertBox, 'remove', 'appear');
                setStyle(errorAlertBox, 'display', 'none');
            });
        });
    }

    profileView() {
        const [sch, cnt, btn] = [...container.children];
        const pfp = new Promise((resolve) => {
            [sch, cnt, btn].map((ch) => setStyle(ch, 'display', 'none'));
            insertHtml(container, 'beforeend', contactProfile(this.ctClass, this.name, this.phoneNumber, this.email));
            resolve({
                profileHtml: selector('.contact_profile'),
                coverPhoto: selector('.top_section'),
                goBack: selector('.back_button'),
                bottomSection: selector('.bottom_section'),
                emailHtml: selector('.mail'),
            });
        });

        pfp.then(({
            coverPhoto, profileHtml, goBack, bottomSection, emailHtml,
        }) => {
            if (this.picUrl) {
                coverPhoto.style.removeProperty('background');
                setProp(coverPhoto.children[2], 'textContent', '');
                setStyle(coverPhoto, 'background-image', `url(${this.picUrl})`);
                classAction(coverPhoto, 'add', 'makePicBg');
            } else {
                profileHtml.style.setProperty('--contactColor', `${this.color}`);
            }

            bottomSection.style.setProperty('--contactColor', `${this.color}`);

            if (!this.email) setStyle(emailHtml, 'display', 'none');

            setTimeout(() => {
                classAction(profileHtml, 'add', 'appear');
            }, 0);

            event(goBack, 'click', () => {
                setProp(profileHtml, 'outerHTML', '');
                [sch, cnt].map((ch) => setStyle(ch, 'display', 'block'));
                setStyle(btn, 'display', 'flex');
            });
        });
    }
}

export default Contact;
