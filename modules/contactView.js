// contact class
import { contactBoilerPlate, contactGroupBoilerplate } from './boilerplates.js';
import DOMStrings from './DOMStrings.js';
import {
 insertHtml, selector, selectorAll, setStyle, setProp, classAction,
} from './functionsUI.js';
const { contactsDiv, contactClass, newContactModal } = DOMStrings;

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
            if ([...contactClass].toString() === '') {
                insertHtml(newContactModal, 'beforebegin', contactGroupBoilerplate(this.initial));
                resolve([...selectorAll(`#contacts_${this.initial} .contact_div`)]);
            }
        });

        p.then((contactGroupCont) => {
            const idNum = contactGroupCont.length;
            return new Promise((resolve) => {
                if (contactGroupCont.toString() === '') {
                    insertHtml(selector(`#contacts_${this.initial}`), 'beforeend',
                    contactBoilerPlate(this.initial, this.lastname ? `${this.lastname} ${this.firstname}` : `${this.firstname}`, idNum));

                    resolve(selector(`#fake_img_${this.initial}_${idNum}`));
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
        });
    }
}

export default ContactView;
