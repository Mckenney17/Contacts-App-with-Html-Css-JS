const check = document.querySelectorAll('.check_box');
const contactDiv = document.querySelectorAll('.contact_div');
const optBtn = document.getElementById('options_btn');
const optModal = document.querySelector('.options_cont');
const sbbtns = document.querySelector('.sbbtns');
const delBtn = document.getElementById('delete_btn');
const sel = document.querySelectorAll('.select');

function animate2() {
    [...contactDiv].map((el) => el.classList.add('anim_sel_click'));
    sbbtns.classList.add('anim_sel_click');
    setTimeout(() => {
        [...check].map((el) => el.classList.add('grow_box'));
        delBtn.classList.add('grow_font');
        optModal.classList.remove('animate_opt_cont_modal');
        optModal.classList.remove('anim_opt_click');
        optBtn.removeEventListener('click', animate);
    }, 0);
}

function animate() {
    optModal.classList.toggle('anim_opt_click');
    setTimeout(() => {
        optModal.classList.toggle('animate_opt_cont_modal');
    }, 0);
}

optBtn.addEventListener('click', animate);
[...sel].map((el) => el.addEventListener('click', animate2));


const modal = document.querySelector('.add_new_contact_modal');
const addBtn = document.querySelector('.add_new_contact_btn');
const inp = document.querySelectorAll('.input');
const fph = document.querySelectorAll('.fake_placeholder');
const inpc = document.querySelectorAll('.inp_cont');

function animate3() {
    modal.classList.toggle('modal_disp');
    setTimeout(() => {
        modal.classList.toggle('animate_modal');
        addBtn.classList.toggle('animate_add_btn');
    }, 0);
}

function animate4(ev) {
    [...inpc].map((el) => el.classList.remove('animate_input'));
    document.getElementById(ev.target.id).parentNode.classList.add('animate_input');
    document.getElementById(ev.target.id).previousElementSibling?.focus();
}

addBtn.addEventListener('click', animate3);
[...inp].map((el) => el.addEventListener('focus', animate4));
[...fph].map((el) => el.addEventListener('click', animate4));

