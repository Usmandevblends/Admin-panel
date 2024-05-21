let btn = document.getElementsByClassName('toggle-btn');
let sidebar = document.getElementsByClassName('sidebar');

btn[0].addEventListener('click', () => {
  if (sidebar[0].style.display === 'none') {
    sidebar[0].style.display = 'block';
  } else {
    sidebar[0].style.display = 'none';
  }
});