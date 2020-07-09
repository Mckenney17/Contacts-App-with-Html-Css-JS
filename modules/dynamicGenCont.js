
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

export default  contactProfile;
