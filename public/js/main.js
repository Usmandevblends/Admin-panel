const showSidebarBtn = document.querySelector('#show_sidebar_phone');
const showSidebarBtnPc = document.querySelector('#show_sidebar_pc');
const closeSidebarBtn = document.querySelector('#close_sidebar');
const overlay = document.querySelector('#overlay');
const fullscreen = document.querySelector('#fullscreen');
const wrapper = document.querySelector('.wrapper');

showSidebarBtn.onclick = function () {
  wrapper.classList.toggle('show');
}

closeSidebarBtn.onclick = function () {
  wrapper.classList.remove('show');
}

overlay.onclick = function () {
  wrapper.classList.remove('show');
}

showSidebarBtnPc.onclick = function () {
  wrapper.classList.toggle('show_pc');
}

