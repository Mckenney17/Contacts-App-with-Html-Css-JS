
const contactProfile = (ctClass, name, phoneNumber, email) => `
<div class="contact_profile">
    <div class="top_section">
        <i class="fas fa-arrow-left back_button"></i>
        <i class="fas fa-edit edit_button"></i>
        <div class="ct_class">${ctClass}</div>
        <span class="name" id='name'>${name}</span>
    </div>
    <div class="bottom_section">
        <div class="phone">
            <i class='fas fa-phone fa-fw'></i>
            <div class="info">
                <div classs='info_h' id='phoneNumber_primary'>${phoneNumber}</div>
                <div class="label">Phone Number</div>
            </div>
        </div>
        <div class="mail">
            <i class='fab fa-google fa-fw'></i>
            <div class="info">
                <div classs='info_h' id='email_primary'>${email}</div>
                <div class="label">E-mail</div>
            </div>
        </div>
    </div>
</div>
`;

const contactBoilerPlate = (ctClass, name, initials) => `
<div class="contact_div" id="contact_div_${ctClass}_${initials}">
    <div class="check_box_div"></div>
    <div class="contact" id='contact_${ctClass}_${initials}'>
        <div class="fake_img" id="fake_img_${ctClass}_${initials}">${ctClass}</div>
        <div class="name name_${ctClass}" id="name_${ctClass}_${initials}">${name}</div>
    </div>
</div>
`;

const contactGroupBoilerplate = (ctClass) => `
<div class="contact_class" id="class_${ctClass}">
    <span class="alpha_label" id="alpha_label_${ctClass}">${ctClass}</span>
    <div class="contacts" id="contacts_${ctClass}">
        
    </div>
</div>
`;

export { contactBoilerPlate, contactGroupBoilerplate, contactProfile };
