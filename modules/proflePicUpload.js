import DOMStrings from './DOMStrings.js';
import { event, setStyle, classAction } from './functionsUI.js';

const { profilePic, profilePicCont, fakeProfilePic } = DOMStrings;

const AddPic = () => {
    const fr = new FileReader();
    fr.readAsDataURL(profilePic.files[0]);
    return new Promise((resolve) => {
        event(fr, 'load', () => {
            setStyle(fakeProfilePic, 'display', 'none');
            setStyle(profilePicCont, 'background', `url(${fr.result})`);
            classAction(profilePicCont, 'add', 'makePicBg');
            resolve(fr.result);
        });
    });
};

export default AddPic;
