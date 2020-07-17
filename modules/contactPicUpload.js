import DOMStrings from './DOMStrings.js';
import {
 event, classAction, setStyleMulti,
} from './functionsUI.js';

const { contactPic, contactPicCont, fakeContactPic } = DOMStrings;

const AddPic = () => {
    const fr = new FileReader();
    fr.readAsDataURL(contactPic.files[0]);
    return new Promise((resolve) => {
        event(fr, 'load', () => {
            setStyleMulti([
                {
                    elem: fakeContactPic,
                    prop: 'display',
                    value: 'none',
                },
                {
                    elem: contactPicCont,
                    prop: 'background',
                    value: `url(${fr.result})`,
                },
            ]);
            classAction(contactPicCont, 'add', 'makePicBg');
            resolve(fr.result);
        });
    });
};

export default AddPic;
// refactored
