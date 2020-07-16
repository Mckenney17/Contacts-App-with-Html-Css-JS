import DOMStrings from './DOMStrings.js';
import { event, setStyle, classAction } from './functionsUI.js';

const { contactPic, contactPicCont, fakeContactPic } = DOMStrings;

const AddPic = () => {
    const fr = new FileReader();
    fr.readAsDataURL(contactPic.files[0]);
    return new Promise((resolve) => {
        event(fr, 'load', () => {
            setStyle([fakeContactPic, contactPicCont], ['display', 'background'], ['none', `url(${fr.result})`]);
            classAction(contactPicCont, 'add', 'makePicBg');
            resolve(fr.result);
        });
    });
};

export default AddPic;
// refactored
