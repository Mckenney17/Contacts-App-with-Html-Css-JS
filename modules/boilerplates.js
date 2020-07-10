
const contactProfile = ({
    initial, name, phoneNumber, mail,
}) => `
<div class="contact_profile">
    <div class="top_section">
        <i class="fas fa-arrow-left back_button"></i>
        <i class="fas fa-edit edit_button"></i>
        <div class="initial">${initial}</div>
        <span class="name">${name}</span>
    </div>
    <div class="bottom_section">
        <div class="phone">
            <i class='fas fa-phone fa-fw'></i>
            <div class="info">
                <div classs='info_h'>${phoneNumber}</div>
                <div class="label">Phone Number</div>
            </div>
        </div>
        <div class="mail">
            <i class='fab fa-google fa-fw'></i>
            <div class="info">
                <div classs='info_h'>${mail}</div>
                <div class="label">E-mail</div>
            </div>
        </div>
    </div>
</div>
`;

const contactBoilerPlate = (initial, name, idNum) => `
<div class="contact_div" id="contact_div_${initial}_${idNum}">
    <div class="check_box_div">
        <div class='check_box' id="check_box_${initial}_${idNum}"></div>
    </div>
    <div class="contact" id='contact_${initial}_${idNum}'>
        <div class="fake_img" id="fake_img_${initial}_${idNum}">${initial}</div>
        <div class="name name_${initial}" id="name_${initial}_${idNum}">${name}</div>
    </div>
</div>
`;

const contactGroupBoilerplate = (initial) => `
<div class="contact_class" id="class_${initial}">
    <span class="alpha_label" id="alpha_label_${initial}">${initial}</span>
    <div class="contacts" id="contacts_${initial}">
        
    </div>
</div>
`;

export { contactBoilerPlate, contactGroupBoilerplate };
