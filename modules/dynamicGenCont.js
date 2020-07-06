// Contact Modal Generated Content
const newContactModal = `
    <div class="add_new_contact_modal">
        <button class="save_btn">Save</button>
        <div class="upload_img">
            <div class="box_inner">
                <div class="circle_inner"></div>
                <div class="plus_sign">+</div>
            </div>
        </div>
        <div class="inp_cont" id='fn_cont'>
            <input type="text" id="fn_input" class='input'>
            <span class='fake_placeholder' id='fake_placeholder_fn'>Firstname</span>
        </div>
        <div class="inp_cont" id='ln_cont'>
            <input type="text" id="ln_input" class='input'>
            <span class='fake_placeholder' id='fake_placeholder_ln'>LastName</span>
        </div>
        <div class="inp_cont" id='pn_cont'>
            <input type="text" id="pn_input" class='input'>
            <span class='fake_placeholder' id='fake_placeholder_pn'>Phone Number</span>
        </div>
        <div class="inp_cont" id='em_cont'>
            <input type="text" id="em_input" class='input'>
            <span class='fake_placeholder' id='fake_placeholder_em'>E-mail</span>
        </div>
    </div>
`;

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

export { newContactModal, contactProfile };
