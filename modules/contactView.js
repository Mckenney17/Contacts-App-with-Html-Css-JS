// contact class
import { contactBoilerPlate, contactGroupBoilerplate } from './boilerplates.js';
import DOMStrings from './DOMStrings.js';
import {
 insertHtml, selector, selectorAll, setStyle, setProp, classAction,
} from './functionsUI.js';
const { contactsDiv, newContactModal } = DOMStrings;


class ContactView {
    constructor({
        initial, firstName, lastName, picUrl, color,
    }) {
        if (!initial) return;

        this.initial = initial.toUpperCase();
        this.firstname = firstName;
        this.lastname = lastName;
        this.picUrl = picUrl;
        this.color = color;


        const p = new Promise((resolve) => {
            if ([...selectorAll('.contact_class')].length === 0) {
                insertHtml(newContactModal, 'beforebegin', contactGroupBoilerplate(this.initial));
                resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
            } else {
                const classIDs = [...selectorAll('.contact_class')].map((el) => el.id);
                if (classIDs.includes(`class_${this.initial}`)) {
                    resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
                } else {
                    classIDs.push(`class_${this.initial}`);
                    const sortClassIDs = classIDs.sort((a, b) => a.localeCompare(b));
                    const classIndex = sortClassIDs.indexOf(`class_${this.initial}`);

                    if (classIndex === 0) {
                        insertHtml(contactsDiv, 'afterbegin', contactGroupBoilerplate(this.initial));
                        resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
                    } else if (classIndex === sortClassIDs.length - 1) {
                        insertHtml(newContactModal, 'beforebegin', contactGroupBoilerplate(this.initial));
                        resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
                    } else {
                        const where = selector(`#${sortClassIDs[classIndex - 1]}`);
                        insertHtml(where, 'afterend', contactGroupBoilerplate(this.initial));
                        resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
                    }
                }
            }
        });

        const rearrangeIDNums = (initialClass) => {
            const { children } = selector(`#contacts_${initialClass}`);

            const contactDivs = [...selectorAll(`#contacts_${initialClass} .contact_div`)];
            contactDivs.map((el) => {
                const indexOfContact = [...children].indexOf(el);
                el.id = `contact_div_${initialClass}_${indexOfContact}`;
                el.children[0].children[0].id = `check_box_${initialClass}_${indexOfContact}`;
                el.children[1].id = `contact_${initialClass}_${indexOfContact}`;
                el.children[1].children[0].id = `fake_img_${initialClass}_${indexOfContact}`;
                el.children[1].children[1].id = `name_${initialClass}_${indexOfContact}`;
            });
        };

        p.then((contactGroupCont) => {
            const idNum = contactGroupCont.length;
            const name = this.lastname ? `${this.lastname} ${this.firstname}` : `${this.firstname}`;

            return new Promise((resolve) => {
                if (contactGroupCont.length === 0) {
                    insertHtml(selector(`#contacts_${this.initial}`), 'beforeend',
                    contactBoilerPlate(this.initial, name, idNum));

                    resolve(selector(`#fake_img_${this.initial}_${idNum}`));
                } else {
                    const contactNames = [...selectorAll(`.name_${this.initial}`)].map((el) => el.textContent);
                    contactNames.push(name);
                    const sortContactNames = contactNames.sort((a, b) => a.localeCompare(b));
                    const contactNameIndex = sortContactNames.indexOf(name);

                    if (contactNameIndex === 0) {
                        insertHtml(selector(`#contacts_${this.initial}`), 'afterbegin',
                        contactBoilerPlate(this.initial, name, contactNameIndex));

                        resolve(selector(`#fake_img_${this.initial}_${contactNameIndex}`));
                    } else if (contactNameIndex === sortContactNames.length - 1) {
                        insertHtml(selector(`#contacts_${this.initial}`), 'beforeend',
                        contactBoilerPlate(this.initial, name, contactNameIndex));

                        resolve(selector(`#fake_img_${this.initial}_${contactNameIndex}`));
                    } else {
                        const where = [...selectorAll(`.name_${this.initial}`)].find((el) => el.textContent === sortContactNames[contactNameIndex - 1]);
                        insertHtml(where.parentNode.parentNode, 'afterend',
                        contactBoilerPlate(this.initial, name, contactNameIndex));

                        resolve(selector(`#fake_img_${this.initial}_${contactNameIndex}`));
                    }
                }
            });
        }).then((contactFakeImg) => {
            if (this.picUrl) {
                setProp(contactFakeImg, 'textContent', '');
                setStyle(contactFakeImg, 'background', `url(${this.picUrl})`);
                classAction(contactFakeImg, 'add', 'makePicBg');
            } else {
                setStyle(contactFakeImg, 'background', `${this.color}`);
            }

            // while insertion ends, id numbers have to be rearranged
            rearrangeIDNums(this.initial);
        });
    }
}

export default ContactView;
